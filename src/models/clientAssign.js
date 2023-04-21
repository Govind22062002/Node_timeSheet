const mongoose = require('mongoose');

const clientAssignSchema = new mongoose.Schema({
    clientName : {
        type: String,
    },
    projectName: {
        type: String,
    },
    status: {
        type: String,
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
