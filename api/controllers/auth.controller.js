const user = require("../model/user.model");

class AuthController {
    user;

    validateData = (data) => {
        let msg = [];

        if(!data.email || !data.password || !data.confirm_password){
            msg.push('Email and passeord is required');
        }
        if(!data.email.include("@")){
            msg.push("Invalid email format");
        }
        if(data.password !== data.confirm_password){
            msg.push("Password and confirm password does not match");
        }
        if(msg.length > 0){
            return {
                status: 400,
                msg: JSON.stringify(msg)
            }
        }else{
            return null;
        }
    }

    // register user
    register = (req, res, next) => {
        let data = req.body;

        let validate = this.validateData(data);
        if(validate) {
            next(validate);
        } else {
            if(req.file){
                data.image = req.file.filename;
            }

            // reset confirm password from request data
            if(data.confirm_password){
                delete data.confirm_password;
            }
            // encrypt password with bcrypt library
            data.password = bcrypt.hashSync(data.password, 10);
        }
    }


}

module.exports = AuthController;