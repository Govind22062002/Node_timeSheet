
const express = require("express")
const router = express.Router()
const {loginCtrlApi} = require("../controllerApi/indexControllerApi")

router.post("/loginPost" , loginCtrlApi.loginPostApi)
router.post("/registerPost", loginCtrlApi.registerPostApi)
module.exports = router ;