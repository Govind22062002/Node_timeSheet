
const express = require("express");
const router = express.Router();
const { isAuthApi } = require("../helperApi/authenticationApi");
const { leaveCtrlApi } = require("../controllerApi/indexController");

router.get("/leave", isAuthApi, leaveCtrlApi.leaveGetCtrl);
router.post("/leavePost", isAuthApi, leaveCtrlApi.leavePostCtrl);
// router.delete("/leaveDelete", isAuthApi, leaveCtrlApi.leaveDeleteCtrl);
// router.post("/leaveUpdate", isAuthApi, leaveCtrlApi.leaveUpdateCtrl);

module.exports = router;