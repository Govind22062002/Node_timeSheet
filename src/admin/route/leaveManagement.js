const express = require("express")
const router = express.Router()

const {leaveRequestCtrl} = require("../controller");

router.get("/view-leave", leaveRequestCtrl.viewLeaveRequest )
router.get("/view-leave-datatable", leaveRequestCtrl.viewLeaveDatatable )

module.exports = router ;