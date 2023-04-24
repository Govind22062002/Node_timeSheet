exports.publicHoliday = async (req, res) => {
    try {
        const user = req.session.username;
        res.render("PublicHoliday",{ user });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

exports.holidayPost = async (req,res) => {
    try {
        const data = await this.publicHoliday.create(req.body)
    } catch (error) {
        console.log(error);
        throw error; 
    }
}
