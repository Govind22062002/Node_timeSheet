const express = require("express")
const appApi = express()
const path = require("path");
const connectDB = require("./src/confiq/connection/connection");
connectDB()
const router = require("./src/api/routeApi/indexRouteApi");
const port = 3039 ; 

appApi.use(express.static(path.join(__dirname, "./public")))
appApi.use(express.urlencoded({extended : true}))
appApi.use(express.json())

router(appApi)

appApi.set("views", path.join(__dirname , "src/admin/views"))
appApi.set("view engine", "ejs");

appApi.listen(port , () => {
    console.log(`server run at port ${port}`);
})