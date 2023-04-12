const mongoose = require('mongoose');

const leaveManagementSchema = new mongoose.Schema({
    employee_Id : {
        type: mongoose.Types.ObjectId,
    },
    leaveType: {
        type: String,
    },
    from: {
        type: Date ,
    },
    to: {
        type: Date ,
    },
    reason : {
       type : String
    },
    action : {
        type: String
    }
}, {    
    timestamps: true,
    versionKey: false
});
module.exports = mongoose.model('leave', leaveManagementSchema);




