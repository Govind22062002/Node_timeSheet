const express = require("express");
const router = express.Router();

const { statusManagementCtrl } = require("../controller");

router.get("/statusManagment", statusManagementCtrl.statusManagement);
router.post("/statusPost", statusManagementCtrl.statusManagementPost);
router.get("/statusUpdate/:id", statusManagementCtrl.statusUpdate);
router.get("/statusDelete/:id", statusManagementCtrl.statusDelete);

module.exports = router;