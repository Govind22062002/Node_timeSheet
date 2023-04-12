const express = require("express")
const app = express()
const session = require("express-session")
const path = require("path");
const connectDB = require("./src/confiq/connection/connection");
connectDB()
const router = require("./src/admin/route");
const port = 3030 ; 

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
}));

app.use(express.static(path.join(__dirname, "./public")))
app.use(express.urlencoded({extended : true}))
app.use(express.json())

router(app)

app.set("views", path.join(__dirname , "src/admin/views"))
app.set("view engine", "ejs");

app.listen(port , () => {
    console.log(`server run at port ${port}`);
})