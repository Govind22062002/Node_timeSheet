const express = require("express")
const router = express.Router()

const {clientAssignCtrl} = require("../controller");

router.get("/client_assign", clientAssignCtrl.clientAssign )

module.exports = router ;