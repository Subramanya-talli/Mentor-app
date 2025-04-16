const express = require("express");
const { createUser } = require("../../controllers/user/controller");
const routes = express.Router();

routes.post("/create", createUser);

module.exports = routes;
