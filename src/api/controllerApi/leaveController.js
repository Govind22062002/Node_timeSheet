const { leaveManagementModel } = require("../../models");

exports.leaveGetCtrl = async (req, res) => {
    try {
        const data = await leaveManagementModel.aggregate([
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
        if (data && data.length !== 0) {
            res.status(200).json({ success: true, data: data });
        } else {
            res.status(400).json({ success: false, age: "There is no data available" });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error });
    }
}

exports.leavePostCtrl = async (req, res) => {
    try {
        const users = await leaveManagementModel.findOne({ employee_Id: req.body.employee_Id });
        if (users) {
            res.status(400).json({ success: false, messages: "user is allready signed" });
        } else {
            const user = await leaveManagementModel.create({
                employee_Id: req.body.employee_Id,
                leaveType: req.body.leaveType,
                from: req.body.from,
                to: req.body.to,
                reason: req.body.reason,
                action: req.body.action,
            });
            res.status(200).json({ success: true, message: user });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error });
    }
}

exports.leaveDeleteCtrl = async (req, res) => {
    try {
        const data = await leaveManagementModel.deleteOne({ _id: req.query.id });
        res.status(200).json({ success: true, message: data });
    } catch (error) {
        res.status(400).json({ success: false, message: error });
    }
}

exports.leaveUpdateCtrl = async (req, res) => {
    try {
        const data = await leaveManagementModel.updateOne(
            { _id: req.query.id },
            {
                leaveType: req.body?.leaveType,
                from: req.body?.from,
                to: req.body?.to,
                reason: req.body?.reason,
                action: req.body?.action
            })
        res.status(200).json({ success: true, message: data });
    } catch (error) {
        res.status(400).json({ success: false, message: error });
    }
}
