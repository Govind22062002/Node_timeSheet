const express = require("express");
const router = express.Router();

const { isAuthApi } = require("../helperApi/authenticationApi");
const { clientAssignCtrl } = require("../controllerApi/indexController");

router.get("/clientAssign",isAuthApi, clientAssignCtrl.clientAssign);
router.post("/clientAssignPost",isAuthApi, clientAssignCtrl.clientAssignPost);
router.get("/clientUpdate",isAuthApi, clientAssignCtrl.clientUpdate);
router.get("/clientDelete/:id",isAuthApi, clientAssignCtrl.clientDelete);

module.exports = router;