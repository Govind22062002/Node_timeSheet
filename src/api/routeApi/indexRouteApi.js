module.exports = (appApi) => {

    appApi.use(require("./loginRouteApi"))
    appApi.use(require("./usersRouteApi"))

}