const bcrypt = require("bcrypt");
const { userModel } = require("../../models");
const { sendMail } = require('../helpers/mailSend');

exports.login = async (req, res) => {
    if (req.session.username) {
        res.redirect("/index");
    } else {
        res.render("login");
    }
}

exports.loginPost = async (req, res) => {
    try {
        const { email, password } = req.body;
        const data = await userModel.findOne({ email })
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
    if (req.session.username) {
        res.redirect("/index");
    } else {
        res.render("register");
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
    }

}

exports.index = (req, res) => {
    try {
        const user = req.session.username;
        if (user) {
            res.render("indexDashbord");
        } else {
            res.redirect("/");
        }
    } catch (error) {
        throw error;
    }
}

exports.viewUsers = async (req, res) => {
    const data = await userModel.find();
    res.render("viewUsers", { data });
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
                Phone: req.body.phone,
                date_Of_Birth: new Date(req.body.date_Of_Birth),
                status: req.body.status,
                password: hashed,
                jobType: req.body.jobType,
                joining_Date: new Date(req.body.joining_Date)
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