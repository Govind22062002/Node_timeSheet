const express = require("express");
const router = express.Router();

const { isAuth } = require("../../helpers/authentication");
const { taskAssignCtrl } = require("../controller");
const { taskVal } = require('../helpers/taskVal');

router.get("/getAssignedTask", isAuth, taskAssignCtrl.getAssignedTask);
router.post("/taskAssignPost",isAuth, taskVal, taskAssignCtrl.assignTask);

module.exports = router;