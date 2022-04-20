const express = require("express");
const {loginCheck, afterLogin, anotherAfterLogin} = require("../middleware/auth.middleware");

const router = express.Router();

module.exports = router;