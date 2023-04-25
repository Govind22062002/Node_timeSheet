module.exports = (appApi) => {

    appApi.use(require("./usersRouteApi"))
    appApi.use(require("./taskAssignRouteApi"))
    appApi.use(require("./publicHolidayRouteApi"))
    appApi.use(require("./leaveRouteApi"))
    appApi.use(require("./clientRouteApi"))

}