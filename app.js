var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors"); // add at the top

var indexRouter = require("./routes/index");
var authRouter = require("./routes/auth");
var profileRouter = require("./routes/profile");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(cors()); // add after 'app' is created

app.use("/api", indexRouter);
app.use("/api/auth", authRouter);
app.use("api/profile", profileRouter);

module.exports = app;
