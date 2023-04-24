const {publicHolidayModel} = require("../../models");

exports.publicHoliday = async (req, res) => {
    try {
        const user = req.session.username;
        const data = await publicHolidayModel.find();
        console.log(data ,"data get");
       if(user) res.render("PublicHoliday",{ user ,data });
       else res.redirect("back");   
    } catch (error) {
        console.log(error);
        throw error;
    }
};

exports.holidayPost = async (req,res) => {
    try {
        console.log(req.body);
        const data = await publicHolidayModel.create(req.body)
        console.log(data ,"data")
       res.redirect("back")
    } catch (error) {
        console.log(error);
        throw error; 
    }
}
