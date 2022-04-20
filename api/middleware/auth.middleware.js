const jwt = require("jsonwebtoken");
const config = require("../config/constants");
const user = require("../model/user.model");


const loginCheck = (req, res, next) => {
    let token = null;

    
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