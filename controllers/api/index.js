const userRoutes = require("./user-routes.js");
const loginRoute = require("./login-controllers.js");
var express = require("express");
var router = express.Router();

router.use("/users", userRoutes);

router.use("/login", loginRoute);
