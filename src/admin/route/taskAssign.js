const express = require("express")
const router = express.Router()

const {taskAssignCtrl} = require("../controller");

router.get("/task_Assign", taskAssignCtrl.taskAssign )
router.post("/taskAssign_Post", taskAssignCtrl.taskAssignPost)
module.exports = router ;