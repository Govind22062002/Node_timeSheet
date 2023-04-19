const express = require("express");
const router = express.Router();

const { noticeBoardCtrl } = require("../controller");

router.get("/notice_Board", noticeBoardCtrl.noticeBoard);

module.exports = router;