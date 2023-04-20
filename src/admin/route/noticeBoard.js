const express = require("express");
const router = express.Router();

const { noticeBoardCtrl } = require("../controller");

router.get("/notice_Board", noticeBoardCtrl.getnoticeList);
router.post("/noticeCreate", noticeBoardCtrl.noticeCreate);
router.get("/noticeUpdate/:id", noticeBoardCtrl.noticeUpdate);
router.get("/noticeDelete/:id", noticeBoardCtrl.noticeDelete);


module.exports = router;