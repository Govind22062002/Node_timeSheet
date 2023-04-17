
const express = require("express")
const router = express.Router()
const {isAuthApi} = require("../helperApi/authenticationApi")
const {publicHolidayCtrlApi} = require("../controllerApi/indexControllerApi")

router.get("/holiday", isAuthApi, publicHolidayCtrlApi.holidayGetCtrl)
router.post("/holidayPost",isAuthApi,publicHolidayCtrlApi.holidayPostCtrl)
module.exports = router ;