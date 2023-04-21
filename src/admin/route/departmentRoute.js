const express = require("express");
const router = express.Router();
const { departmentController } = require("../controller");

router.get("/view-department", departmentController.viewDepartment);
router.post('/department-create', departmentController.departmentCreate);
// router.post('/departmet-update/:id', departmentController.departmetUpdate);
router.get('/departmet-delete/:id', departmentController.departmetdelete);

module.exports = router;