const router = require("express").Router();
const userController = require("../controllers/user.controller");

const usrCtrl = new userController();

router.route('/')
    .get(usrCtrl.getAllUsers);

module.exports = router;