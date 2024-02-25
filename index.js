"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var PORT = 3000;
console.log(process.env.FULL_NAME);
app.get("/hola", function (req, res) {
    res.json({
        message: "Hola desde el servidor",
    });
});
app.listen(PORT, function () {
    console.log("Server is running on port: ", PORT);
});
