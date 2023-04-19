const express = require("express");
const router = express.Router();

const { taskAssignCtrl } = require("../controller");

router.get("/getAssignedTask", taskAssignCtrl.getAssignedTask);
router.post("/assignTask/:id", taskAssignCtrl.assignTask);

module.exports = router;