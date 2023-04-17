const express = require("express");
const app = express();
require('dotenv').config()
const path = require("path");
const port = process.env.API_PORT || 8000; 
require("./src/datasources/connection");
const router = require("./src/api/routeApi/");

app.use(express.static(path.join(__dirname, "./public")))
app.use(express.urlencoded({extended : true}))
app.use(express.json())
router(app)

app.set("views", path.join(__dirname , "src/admin/views"))
app.set("view engine", "ejs");

app.listen(port , () => {
    console.log(`server run at port ${port}`);
})