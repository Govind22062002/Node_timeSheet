const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    role_name: {
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
module.exports = mongoose.model('role', roleSchema);




