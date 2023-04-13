const {controller} = require("../controller/")


module.exports = (app) => {
    app.use(require("./login"))

    app.use(require("./emailMessage.js"))
    app.use(require("./publicHoliday"))
    app.use(require("./teamMates"))
    app.use(require("./clientAssign"))
    app.use(require("./taskAssign"))
    app.use(require("./noticeBoard"))
    app.use(require("./leaveRequest"))
    app.use(require("./statusManagement"))
}