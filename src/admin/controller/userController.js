const bcrypt = require("bcrypt");
const { userModel } = require("../../models");
const { sendMail } = require('../helpers/mailSend');

exports.login = async (req, res) => {
   try {
    if (req.session.username) {
        res.redirect("/index");
    } else {
        res.render("login");
    }
   } catch (error) {
    throw error;
   }
    
}

exports.loginPost = async (req, res) => {
    try {
        const { email, password } = req.body;
        const data = await userModel.findOne({ email });
        if (!data) {
            res.redirect("/");
        } else {
            const isMatch = await bcrypt.compare(password, data.password);
            if (isMatch) {
                req.session.username = data;
                res.redirect("/index");

            } else {
                res.redirect("/");
            }
        }
    } catch (error) {
        console.log(error);
    }
}

exports.register = async (req, res) => {
    try {
        if (req.session.username) {
            res.redirect("/index");
        } else {
            res.render("register");
        }    
    } catch (error) {
        throw error;
    }
    
}

exports.registerPost = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (user) {
            res.redirect("/registerPost");
        } else {
            const hashed = await bcrypt.hash(password, 10);
            const data = await userModel.create({
                name,
                email,
                password: hashed
            });
            res.redirect("/");
        }
    } catch (error) {
        console.log(error);
    };

}

exports.index = (req, res) => {
    try {
        const user = req.session.username;
        if (user)res.render("indexDashbord",{user});
        else res.redirect("/");
    } catch (error) {
        throw error;
    }
}

exports.viewUsers = async (req, res) => {
    try {
        const user = req.session.username;
        const data = await userModel.find();
        res.render("viewUsers", {user, data });
    } catch (error) {
        throw error;  
    }
   }

exports.registerUser = async (req, res) => {
    try {
        const userData = req.session.username;
        const randomString1 = Math.random().toString(36).slice(2, 10);
        const hashed = await bcrypt.hash(randomString1, 10);
        if (userData.role && userData.role == 'ADMIN') {
            const data = await userModel.create({
                name: req.body.name,
                type: req.body.type,
                email: req.body.email,
                phone: req.body.phone,
                dob: new Date(req.body.dob),
                status: req.body.status,
                dept: req.body.dept,
                password: hashed,
                jobType: req.body.jobType,
                joiningDate: new Date(req.body.joiningDate)
            });
            if (data) {
                const subject = `Your Loggin Credentials are:-`;
                const body = `email:-${req.body.email},password:${randomString1}`;
                sendMail(req, subject, body);
            }
            res.redirect("back");
        } else res.redirect("back");
        
    } catch (error) {
        console.log(error);
        throw error;
    }

}