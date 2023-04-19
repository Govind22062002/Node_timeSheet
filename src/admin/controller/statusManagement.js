exports.statusManagement = async (req, res) => {
    const user = req.session.username;
    res.render("status_Management",{user});
}