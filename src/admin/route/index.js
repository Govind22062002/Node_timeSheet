const {controller} = require("../controller/")


module.exports = (app) => {
    app.use(require("./login"))
<<<<<<< HEAD
    app.use(require("./emailMessage.js"))
    app.use(require("./publicHoliday"))
    app.use(require("./teamMates"))
    app.use(require("./clientAssign"))
    app.use(require("./taskAssign"))
    app.use(require("./noticeBoard"))
    app.use(require("./leaveRequest"))
    app.use(require("./statusManagement"))
=======
    app.use(require("./email_message.js"))
    app.use(require("./public_Holiday"))
    app.use(require("./team_Mates"))
    app.use(require("./client_assign"))
    app.use(require("./task_Assign"))
    app.use(require("./notice_Board"))
    app.use(require("./leave_Request"))
    app.use(require("./status_Management"))
>>>>>>> f013e5571e2e171f1db63ab9ba83658c16409992
}