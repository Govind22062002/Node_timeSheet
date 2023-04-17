const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type: String,
    },
    role:{
        type: String,
        enum: ['USER', 'ADMIN']
    },
    dept : {
        type: String,
    },
    email: {
        type: String,
    },
    phone : {
        type : Number
    },
    dob : {
        type : Date
    },
    isActive: {
        type: Boolean,
        default:true
    },
    jobType: {
        type: String,
        enum : ['TRAINEE', 'INTERN', 'JOB']
    },
    joiningDate: {
        type: Date,
    }
}, {
    timestamps: true,
    versionKey: false
});
module.exports = mongoose.model('user', userSchema);
