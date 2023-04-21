const { time } = require('console');
const mongoose = require('mongoose');

const statusManagementSchema = new mongoose.Schema({
    employee_ID : {
        type: mongoose.Types.ObjectId,
    },
    project_ID : {
        type: String,
    },
    work_Type : {
        type: String,
    },
    date: {
        type: Date,
    },
    Time  : {
        type: String,
    },
    discription : {
        type : String
    }
}, {
    timestamps: true,
    versionKey: false
});
module.exports = mongoose.model('status_Management', statusManagementSchema);
