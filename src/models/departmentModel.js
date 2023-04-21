const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    title: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true,
    versionKey: false
});
module.exports = mongoose.model('department', departmentSchema);




