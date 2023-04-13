const express = require("express");
const app = express();
require('dotenv').config()
const path = require("path");
const port = process.env.PORT || 8000; 
const session = require("express-session")
require("./src/datasources/connection");
const router = require("./src/admin/route");

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
}));

app.use(express.static(path.join(__dirname, "./public")))
app.use(express.urlencoded({extended : true}))
app.use(express.json())
router(app)
// router(app)

app.set("views", path.join(__dirname , "src/admin/views"))
app.set("view engine", "ejs");

app.listen(port , () => {
    console.log(`server run at port ${port}`);
})