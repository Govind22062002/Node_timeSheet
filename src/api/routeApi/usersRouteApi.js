
const express = require("express")
const router = express.Router()
const {isAuthApi} = require("../helperApi/authenticationApi")
const {usersCtrlApi} = require("../controllerApi/indexControllerApi")

router.post("/usersPost",isAuthApi,usersCtrlApi.usersCtrl)
module.exports = router ;