const express = require("express");
const router = express.Router();

const { rolesCtrl } = require("../controller");
const { isAuth } = require("../../helpers/authentication");

router.get("/getRoleList", isAuth, rolesCtrl.getRoleList);
router.post("/roleCreate", isAuth, rolesCtrl.roleCreate);
router.get("/roleDelete/:id", isAuth, rolesCtrl.roleDelete);
router.get("/roleUpdate/:id", isAuth, rolesCtrl.roleUpdate);

module.exports = router;