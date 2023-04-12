const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name : {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }
}, {
    timestamps: true,
    versionKey: false
});
module.exports = mongoose.model('register', registerSchema);




