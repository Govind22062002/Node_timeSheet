const {controller} = require("../controller/")

module.exports = (app) => {
    app.use(require("./emailMessage.js"))
    app.use(require("./publicHoliday"))
    app.use(require("./usersRoutes"))
    app.use(require("./clientAssign"))
    app.use(require("./taskAssign"))
    app.use(require("./noticeBoard"))
    app.use(require("./leaveManagement"))
    app.use(require("./statusManagement"))
}