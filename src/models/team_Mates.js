const mongoose = require('mongoose');

const teamMatesSchema = new mongoose.Schema({
    name : {
        type: String,
    },
    type : {
        type: String,
    },
    email: {
        type: String,
    },
    Phone : {
        type : Number
    },
    date_Of_Birth : {
        type : Date
    },
    status: {
        type: String,
    },
    jobType: {
        type: String,
    },
    joining_Date: {
        type: Date,
    }
}, {
    timestamps: true,
    versionKey: false
});
module.exports = mongoose.model('team_Mates', teamMatesSchema);
