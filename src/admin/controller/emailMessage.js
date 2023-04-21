const emailModel = require('../../models/emailModel');
const nodemailer = require('nodemailer');
const {sendMail} = require('../helpers/mailSend');

exports.emailMessage = async (req, res) => {
    const data = await emailModel.find({ To: 'timesheetracker7@gmail.com' }, { is_active: true });
    const user = req.session.username;
    res.render("emailMessage", { data, user });
}

exports.sendMail = async (req, res) => {
    try {
        const { To, subject, body } = req.body;
        sendMail(req, subject, body)
        const data = new emailModel({
            To,
            subject,
            body,
            "from": "timesheetracker7@gmail.com"
        });

        data.save();
        res.redirect('back');
    } catch (error) {
        console.log(error);
        throw error;
    }
};

exports.viewSentMail = async (req, res) => {
    try {
        const user = req.session.username;
        const data = await emailModel.find({ sender_type: 'admin', is_active: true });
        res.render('sentMail', { data, user });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

exports.deletEmail = async (req, res) => {
    try {
        const ids = req.body;
        const data = await emailModel.updateMany({ id: ids }, { $set: { is_active: false } });
        res.send(data);
    } catch (error) {
        console.log(error);
        throw error;
    }
};