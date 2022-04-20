const router = require("express").Router();
// const authController = require("../controllers/auth.controller");
// const authCtrl = new AuthController;

const {loginCheck} = require("../middleware/auth.middleware")

module.exports = router;
