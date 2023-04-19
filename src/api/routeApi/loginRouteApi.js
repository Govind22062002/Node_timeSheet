
const express = require("express")
const router = express.Router()
const {usersCtrlApi} = require("../controllerApi/indexControllerApi")

router.post("/loginPost" , )
router.post("/registerPost", usersCtrlApi.usersPostCtrl)
module.exports = router ;