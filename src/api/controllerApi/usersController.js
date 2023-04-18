const { userModel } = require("../../models")

exports.getUsers = async (req, res) => {
    try {
        const data = await userModel.find()
        if (data && data.length !== 0) {
            res
                .status(200)
                .json({
                    success: true,
                    data: data
                })
        } else {
            res
                .status(400)
                .json({
                    success: false,
                    message: "There is no users data available"
                })
        }
    } catch (error) {
        res
            .status(400)
            .json({
                success: false,
                message: error
            })
    }

}

exports.userSignup = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email })
        if (user) {
            res
                .status(400)
                .json({
                    success: false,
                    messages: "Email Id is allready exist"
                })
        } else {
            const data = await userModel.create({
                name: req.body.name,
                role: req.body.role,
                email: req.body.email,
                Phone: req.body.phone,
                date_Of_Birth: new Date(req.body.date_Of_Birth),
                status: req.body.status,
                jobType: req.body.jobType,
                joining_Date: new Date(req.body.joining_Date)
            })
            res
                .status(200)
                .json({
                    success: true,
                    data: data
                })
        }
    } catch (error) {
        res
                .status(400)
                .json({
                    success: false,
                    message : error
                })
    }
}