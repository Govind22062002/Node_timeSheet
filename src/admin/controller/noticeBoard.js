exports.noticeBoard = async (req, res) => {
    const user = req.session.username;
    res.render("noticeBoard",{user});
}