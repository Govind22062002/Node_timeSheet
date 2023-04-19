const leaveModel = require("../../models/leaveManagement");

exports.viewLeaveRequest = async (req, res) => {
    try {
        const data = await leaveModel.find();
        const user = req.session.username;
        res.render("viewLeaveRequest", { data, user });
    } catch (error) {
        throw error;
    }

}

exports.viewLeaveDatatable = async (req, res) => {
    try {
        if (req.query.id) {
            const data = await leaveModel.updateOne(
                { _id: req.query.id },
                { action: req.query.message },
                { upsert: true }
            );
            res.send(data);
        }
    } catch (error) {
        throw error
    }
}