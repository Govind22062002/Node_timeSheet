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
        // const data = await 
    } catch (error) {
        console.log(error);
        throw error
    }
}