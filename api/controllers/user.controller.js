const user = require("../model/user.model");
const { getAllData } = require("../service/db.service");
const Role = require("../model/role.model");

class UserController {
    getAllUsers = (req, res, next) => {
        User.find()
        .populate('role_id')
        .populate('relation_key')
        .then((users) => {
            res.json({
                result: users,
                status: true,
                msg: "List Successful"
            })
        })
    }
}

module.exports = UserController;