const {publicHolidayModel} = require("../../models");

exports.publicHoliday = async (req, res) => {
    try {
        const user = req.session.username;
        const data = await publicHolidayModel.find();
       if(user) res.render("PublicHoliday",{ user ,data });
       else res.redirect("back");   
    } catch (error) {
        console.log(error);
        throw error;
    }
};

exports.holidayPost = async (req,res) => {
    try {
        const data = await publicHolidayModel.create(req.body)
       res.redirect("back")
    } catch (error) {
        console.log(error);
        throw error; 
    }
}
