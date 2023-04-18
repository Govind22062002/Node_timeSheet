
const express = require("express")
const router = express.Router()
const {isAuthApi} = require("../helperApi/authenticationApi")
const {publicHolidayCtrlApi} = require("../controllerApi/indexControllerApi")

router.get("/holiday", isAuthApi, publicHolidayCtrlApi.holidayGetCtrl)
router.post("/holidayPost",isAuthApi,publicHolidayCtrlApi.holidayPostCtrl)
router.delete("/holidayDelete",isAuthApi,publicHolidayCtrlApi.holidayDeleteCtrl)
router.post("/holidayUpdate",isAuthApi,publicHolidayCtrlApi.holidayUpdateCtrl)

module.exports = router ;