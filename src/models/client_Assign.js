const mongoose = require('mongoose');

const clientAssignSchema = new mongoose.Schema({
    job_ID : {
        type: String,
    },
    employee_ID : {
        type: mongoose.Types.ObjectId,
    },
    job_Title: {
        type: String,
    },
    work_Hours: {
        type: Date,
    },
    status: {
        type: String,
    },
    type: {
        type: String,
    },
    date: {
        type: Date,
    },
    start_Date: {
        type: Date,
    },
    end_Date: {
        type: Date,
    },
    discription : {
        type : String
    },
   
}, {
    timestamps: true,
    versionKey: false
});
module.exports = mongoose.model('clientAssign', clientAssignSchema);
