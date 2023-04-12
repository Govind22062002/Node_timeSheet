const express = require("express")
const router = express.Router()
const {isAuth} = require("../../helpers/authentication")
const {teamMatesCtrl} = require("../controller");

router.get("/team_Mates",isAuth ,teamMatesCtrl.teamMates )

router.post("/teamMates_Post", isAuth , teamMatesCtrl.teamMates_Post )

module.exports = router ;