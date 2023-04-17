const express = require("express")
const router = express.Router()

const {leaveRequestCtrl} = require("../controller");

router.get("/view-leave", leaveRequestCtrl.viewLeaveRequest )

module.exports = router ;