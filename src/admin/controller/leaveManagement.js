const leaveModel = require("../../models/leaveManagement");
const { sendMail } = require('../helpers/mailSend');

exports.viewLeaveRequest = async (req, res) => {
    try {
        const user = req.session.username;
        const data = await leaveModel.aggregate([
            {
              '$lookup': {
                'from': 'users', 
                'localField': 'employee_Id', 
                'foreignField': '_id', 
                'as': 'result'
              }
            }, {
              '$unwind': {
                'path': '$result'
              }
            }, {
              '$project': {
                'name': '$result.name', 
                'email': '$result.email', 
                'leaveType': 1, 
                'from': 1, 
                'to': 1, 
                'reason': 1, 
                'action': 1
              }
            }
          ]);
        if(user) res.render("viewLeaveRequest", { data, user });
        else res.redirect("back")
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
            if (data) {
                const subject = `Your Leave Request are:-`;
                const body = `email:-${req.query.email} leave are ${req.query.message}`; 
                
                sendMail(req.query.email, subject, body);
            res.send(data);
        }  
        }
    } catch (error) {
        throw error
    };
};