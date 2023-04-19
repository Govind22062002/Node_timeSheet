const express = require("express");
const router = express.Router();
const { isAuthApi } = require("../helperApi/authenticationApi");
const { taskAssignCtrlApi } = require("../controllerApi/indexControllerApi");

router.get("/taskAssign", isAuthApi, taskAssignCtrlApi.taskAssignGetCtrl);
router.post("/taskAssignPost", isAuthApi, taskAssignCtrlApi.taskAssignPostCtrl);
module.exports = router;