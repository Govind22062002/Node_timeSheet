const express = require("express")
const router = express.Router()

const {leaveRequestCtrl} = require("../controller");

router.get("/leaveRequest", leaveRequestCtrl.leaveRequest )

module.exports = router ;