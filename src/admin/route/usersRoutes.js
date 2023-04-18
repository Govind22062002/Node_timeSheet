const express = require("express")
const router = express.Router();
const { isAuth } = require("../../helpers/authentication")
const { userContoller } = require("../controller");
const {userVal} = require('../helpers/userVal');
router.get("/" , userContoller.login);
router.post("/loginPost", userContoller.loginPost );
router.get("/register", userContoller.register );
router.post("/registerPost" , userContoller.registerPost );
router.get("/index", userContoller.index);
router.get("/view-users",isAuth ,userContoller.viewUsers );
router.post("/register-user", isAuth , userVal, userContoller.registerUser );

module.exports = router ;