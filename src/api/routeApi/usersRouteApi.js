
const express = require("express")
const router = express.Router()
const { isAuthApi } = require("../helperApi/authenticationApi")
const { usersCtrlApi } = require("../controllerApi/indexControllerApi")

router.get("/users", isAuthApi, usersCtrlApi.usersGetCtrl)
router.post("/usersPost", isAuthApi, usersCtrlApi.usersPostCtrl)
module.exports = router;