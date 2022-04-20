const apiResponse = require("../helpers/functions");
const User = require("../model/user.model");

const config = require("../config/constants");
class AuthController {
    user;

    mapUser = (data) => {
        this.user = {
            _id: data._id,
            name: data.name,
            email: data.email,
            status: data.status,
            role_id: data.role_id,
            image: data.image,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        }
    }

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
        console.log("here");
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

            let user = new User(data);
            user.save()
            .then((ack) => {
                res.json({
                    result: user,
                    msg: "registered successfully",
                    status: true
                })
                .catch((error) => {
                    next({msg: JSON.stringify(error), status: 400})
                })
            })
        }
    }


}

module.exports = AuthController;