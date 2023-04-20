const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type: String,
    },
    role:{
        type: mongoose.Types.ObjectId,
    },
    password:{
        type:String
    },
    dept : {
        type: String,
    },
    email: {
        type: String,
    },
    status: {
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
