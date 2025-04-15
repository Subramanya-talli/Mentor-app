const express = require("express");
const { createUser } = require("../../controllers/user/controller");
const routes = express.Router();

routes.put("/signup", createUser);

module.exports = routes;
