const { noticeModel, userModel } = require("../../models");
const moment = require("moment");
const { sendMail } = require('../helpers/mailSend');

exports.getnoticeList = async (req, res) => {
    try {
        const user = req.session.username;
        const data = await noticeModel.find({ isActive: true }).select({ _id: 1, title: 1, notice: 1, createdAt: 1 });
        res.render("noticeBoard", { data, user, moment: moment });
    } catch (error) {
        throw error;
    }
}

exports.noticeCreate = async (req, res) => {
    try {
        const data = await noticeModel.create({
            title: req.body.title,
            notice: req.body.notice
        });
        if (data) {
            const users = await userModel.find({},{email:1,_id:0});
            let emailArr = [];
            if(users.length>0){
                for(let i of users){
                    emailArr.push(i.email)
                }
            }
            await sendMail(emailArr, req.body.title, req.body.notice)
            
            req.flash('success', 'Notice sent successfully');
        } else req.flash('error', 'Something went wrong');
        res.redirect("back");
    } catch (error) {
        throw error;
    }
}

exports.noticeUpdate = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await noticeModel.updateOne({ notice_id: id }, {
            notice_name: req.body.notice_name,
        });
        res.redirect("back");
    } catch (error) {
        throw error;
    }
}

exports.noticeDelete = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await noticeModel.deleteOne({ notice_id: id });
        res.redirect("back");
    } catch (error) {
        throw error;
    }
}