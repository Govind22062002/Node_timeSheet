exports.isAuth = async (req,res,next) => {
    if (req.session.username) {
        console.log("login shjkdsk");
        next()
      } else {
        res.redirect("/")
      }
}