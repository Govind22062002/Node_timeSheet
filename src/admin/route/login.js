const express = require("express")
const router = express.Router()
const {loginCtrl} = require("../controller")

router.get("/" , loginCtrl.login)
router.post("/loginPost", loginCtrl.loginPost )
router.get("/register", loginCtrl.register )
router.post("/registerPost" , loginCtrl.registerPost )
router.get("/index", loginCtrl.index)

module.exports = router ;