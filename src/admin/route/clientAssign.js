const express = require("express");
const router = express.Router();

const { isAuth } = require("../../helpers/authentication");
const { clientAssignCtrl } = require("../controller");

router.get("/clientAssign",isAuth, clientAssignCtrl.clientAssign);
router.post("/clientAssignPost",isAuth, clientAssignCtrl.clientAssignPost);
router.get("/clientUpdate",isAuth, clientAssignCtrl.clientUpdate);
router.get("/clientDelete/:id",isAuth, clientAssignCtrl.clientDelete);

module.exports = router;