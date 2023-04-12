const express = require("express")
const router = express.Router()

const {statusManagementCtrl} = require("../controller");

router.get("/statusManagment", statusManagementCtrl.statusManagement )

module.exports = router ;