const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    title: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true,
    versionKey: false
});
module.exports = mongoose.model('department', departmentSchema);




