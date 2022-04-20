const router = require("express").Router();
const { routes } = require(".");
const AuthController = require("../controllers/auth.controller");
const authCtrl = new AuthController;

const {loginCheck} = require("../middleware/auth.middleware")

router.post("/register", authCtrl.register);
module.exports = router;
