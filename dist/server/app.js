"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const compression = require("compression");
const express = require("express");
const path = require("path");
const login_1 = require("./routes/login");
const app = express();
exports.app = app;
app.disable("x-powered-by");
app.use(body_parser_1.json());
app.use(compression());
app.use(body_parser_1.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PATCH, DELETE, OPTIONS");
    next();
});
app.use("/api", login_1.loginRouter);
if (app.get("env") === "production") {
    // in production mode run application from dist folder
    app.use(express.static(path.join(__dirname, "/../client")));
}
// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    next(err);
});
// production error handler
// no stacktrace leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});
//# sourceMappingURL=/home/andre/Documents/projetsNode/Ezosmart/dist/server/app.js.map