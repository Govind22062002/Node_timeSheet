const express = require("express");
const router = express.Router();
const { clientAssignCtrl } = require("../controller");

router.get("/clientAssign", clientAssignCtrl.clientAssign);

module.exports = router;