const bcrypt = require("bcrypt")
const { registerModel } = require("../../models")

exports.login = async (req, res) => {
    if (req.session.username) {
    res.redirect("/index")    
    } else {
        res.render("login")
    }
}

exports.loginPost = async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;
        const data = await registerModel.findOne({ email })
        console.log(data.password ,"data");
        if (!data) {
            res.redirect("/")
        } else {
            const isMatch = await bcrypt.compare(password, data.password);
            console.log(isMatch ,"match");
            if (isMatch) {
                // const token = await data.generateAuthToken();
                // res.cookie("jwt", token, {
                //   expires: new Date(Date.now() + 50000),
                //   httpOnly: true,
                // });
                req.session.username = data
                res.redirect("/index")
                
            } else {
                console.log("dfgh");
                res.redirect("/")
            }
        }
    } catch (error) {
        console.log(error);
    }
}

exports.register = async (req, res) => {
    if (req.session.username) {
        res.redirect("/index")    
        } else {
            res.render("register")
        }
}

exports.registerPost = async (req, res) => {
    try {
        console.log(req.body, "body");
        const { name, email, password } = req.body
        const user = await registerModel.findOne({ email })
        console.log(user ,"user post");
        if (user) {
            res.redirect("/registerPost")
        } else {
            const hashed = await bcrypt.hash(password, 10)
            const data = await registerModel.create({
                name,
                email,
                password: hashed
            })
            res.redirect("/")
        }
    } catch (error) {
        console.log(error);
    }

}

exports.index = (req,res) => {
    try {
    const user = req.session.username;
        if (user) {
            res.render("indexDashbord")
        } else {
            res.redirect("/")
        }
    } catch (error) {
        
    }
}