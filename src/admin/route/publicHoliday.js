const express = require("express");
const router = express.Router();

const { publicHolidayCtrl } = require("../controller");

router.get("/public_Holiday", publicHolidayCtrl.publicHoliday);

module.exports = router;