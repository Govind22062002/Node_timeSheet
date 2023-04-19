exports.publicHoliday = async (req, res) => {
    const user = req.session.username;
    res.render("Public_Holiday",{user});
}