const { noticeModel } = require("../../models");

exports.getnoticeList = async (req, res) => {
    try {
        const user = req.session.username;
        const data = await noticeModel.find({ isActive: true }).select({ _id: 1, notice_name: 1 });
        res.render("noticeBoard", {user , data });
    } catch (error) {
        throw error;
    }
}

exports.noticeCreate = async (req, res) => {
    try {
        const data = await noticeModel.create({
            notice_name: req.body.notice_name
        });
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
        const data = await noticeModel.deleteOne({ notice_id: id }, {
            notice_name: req.body.notice_name,
        });
        res.redirect("back");
    } catch (error) {
        throw error;
    }
}