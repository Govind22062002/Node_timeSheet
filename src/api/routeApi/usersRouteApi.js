const express = require("express");
const router = express.Router();

const { isAuthApi } = require("../helperApi/authenticationApi");
const { usersCtrlApi } = require("../controllerApi/indexController");
const {userVal} = require("../helperApi/userval")

router.post("/loginPost", usersCtrlApi.loginPost );
router.post("/registerPost" , usersCtrlApi.registerPost );
router.get("/index",isAuthApi ,usersCtrlApi.index );

router.get("/users", isAuthApi ,usersCtrlApi.usersGetCtrl );
router.post("/usersPost", isAuthApi, userVal, usersCtrlApi.usersPostCtrl );
router.delete("/usersDelete", isAuthApi, usersCtrlApi.usersDeleteCtrl );
router.post("/usersUpdate", isAuthApi, usersCtrlApi.usersUpdateCtrl );

module.exports = router;
