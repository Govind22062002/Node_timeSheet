const mongoose = require('mongoose');

const noticeBoardSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    notice: {
        type: String
    },

}, {
    timestamps: true,
    versionKey: false
});
module.exports = mongoose.model('notice_Board', noticeBoardSchema);




