const user = require("../model/user.model");

const loginCheck = (req, res, next) => {
    console.log("first call");
    next();
}

const afterLogin = (req, res, next) => {
    console.log("second call");
    next();
}

const anotherAfterLogin = (req, res, next) => {
    console.log("third call");
    next();
}

module.exports = {
    loginCheck,
    afterLogin,
    anotherAfterLogin
}