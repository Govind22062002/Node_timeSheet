
const express = require("express")
const router = express.Router()
const {isAuthApi} = require("../helperApi/authenticationApi")
const {leaveCtrlApi} = require("../controllerApi/indexControllerApi")

router.get("/leave", isAuthApi, leaveCtrlApi.leaveGetCtrl)
router.post("/leavePost",isAuthApi,leaveCtrlApi.leavePostCtrl)
module.exports = router ;