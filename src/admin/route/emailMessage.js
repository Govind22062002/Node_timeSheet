const express = require("express")
const router = express.Router()

const {emailmessageCtrl} = require("../controller");

router.get("/email_message", emailmessageCtrl.emailMessage )

module.exports = router ;