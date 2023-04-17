const leaveModel = require("../../models/leaveManagement");

exports.viewLeaveRequest = async (req, res) => {
    try {
        res.render("viewLeaveRequest");
    } catch (error) {
        console.log(error);
        throw error;
    }
    
}

exports.viewLeaveDatatable = async (req, res) => {
    try {
        const result = await leaveModel.find();
        let dataa = [];
        for(let i of result){
            dataa.push({
            emp_id:i.employee_Id,
            leave_type:i.leaveType,
            from:i.from,
            to:i.to,
            reason:i.reason,
            });
        }
        var data = JSON.stringify({
            "data": dataa
        });
        res.send(data);
    } catch (error) {
        console.log(error);
        throw error
    }
}