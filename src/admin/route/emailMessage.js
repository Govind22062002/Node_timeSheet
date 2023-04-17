const express = require("express")
const router = express.Router()
const {isAuth} = require('../../helpers/authentication');

const {emailmessageCtrl} = require("../controller");

router.get("/email_message", emailmessageCtrl.emailMessage )
router.post('/mail-sent', emailmessageCtrl.sendMail);
router.get('/view-sent-mail', isAuth, emailmessageCtrl.viewSentMail);
router.post('/delete_email', isAuth, emailmessageCtrl.deletEmail);

module.exports = router ;