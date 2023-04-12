const mongoose = require('mongoose');

const taskAssignSchema = new mongoose.Schema({
    employee_Id : {
        type: mongoose.Types.ObjectId,
    },
    status : {
        type : String
     },
     Work_Hour: {
        type: String,
    },
    start_Date: {
        type: Date ,
    },
    end_Date: {
        type: Date ,
    },
}, {    
    timestamps: true,
    versionKey: false
});
module.exports = mongoose.model('task_Assign', taskAssignSchema);




