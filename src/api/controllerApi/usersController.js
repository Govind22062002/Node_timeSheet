const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { registerModel } = require("../../models")

exports.userLoggin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const chkUser = await registerModel.findOne({ email });

        if (!chkUser) {
            res.status(200).json({
                success: false,
                data: 'User Not Exists!'
            });
        } else {
            let token;
            const isMatch = await bcrypt.compare(password, chkUser.password);

            if (isMatch) {
                token = jwt.sign(
                    { userId: existingUser.id, email: existingUser.email },
                    "secretkeyappearshere"
                );
            } else {
                res.status(200).json({
                    success: false,
                    data: 'Wrong Credentials!'
                });
            }

            res.status(200).json({
                success: true,
                data: {
                    userId: chkUser.id,
                    email: chkUser.email,
                    password: chkUser.password,
                    token: token,
                },
            });
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}