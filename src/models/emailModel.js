const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
    To : {
        type: String,
    },
    subject : {
        type: String
    },
    body: {
        type: String,
    },
    from: {
        type: String,
    },
    sender_type: {
        type: String,
        enum : ['user','admin'],
        default: 'admin'
    },
    is_active: {
        type: Boolean,
        default:'false'
    }
   
}, {
    timestamps: true,
    versionKey: false
});
module.exports = mongoose.model('emailmessage', emailSchema);
