const {controller} = require("../controller/")


module.exports = (app) => {
    app.use(require("./login"))
    app.use(require("./email_message.js"))
    app.use(require("./public_Holiday"))
    app.use(require("./team_Mates"))
    app.use(require("./client_assign"))
    app.use(require("./task_Assign"))
    app.use(require("./notice_Board"))
    app.use(require("./leave_Request"))
    app.use(require("./status_Management"))
}