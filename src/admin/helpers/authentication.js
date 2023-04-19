const jwt = require("jsonwebtoken");

exports.isAuth = async (req, res, next) => {
   if (req.session.username) {
      next();
   } else {
      res.redirect("/");
   }
}
