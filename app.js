var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors"); // add at the top

var servicesRouter = require("./routes/services");
var authRouter = require("./routes/auth");
var profileRouter = require("./routes/profile");
var chatRouter = require("./routes/chat");

var app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(cors()); // add after 'app' is created
app.use(express.static(path.join(__dirname, "/client/dist")));

app.use("/api/services", servicesRouter);
app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);
app.use("/api/chat", chatRouter);

module.exports = app;
