const { userModel, taskAssignModel } = require("../../models");

exports.getAssignedTask = async (req, res) => {
    const data = await teamMatesModel.find();
    res.render("taskAssign", { data });
}

exports.assignTask = async (req, res) => {
    console.log(req.body);
    const data = await taskAssignModel.create({
        employee_Id: req.body.employee_Id,
        status: req.body.status,
        Work_Hour: req.body.Work_Hour,
        start_Date: req.body.start_Date,
        end_Date: req.body.end_Date
    });
    res.redirect("back")
}
