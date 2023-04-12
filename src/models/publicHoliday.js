const mongoose = require('mongoose');

const publicHolidaySchema = new mongoose.Schema({
    title : {
        type: String,
    },
    start_Date: {
        type: Date ,
    },
    end_Date: {
        type: Date ,
    },
    discription : {
       type : String
    },
}, {    
    timestamps: true,
    versionKey: false
});
module.exports = mongoose.model('public_Holiday', publicHolidaySchema);




