const mongoose = require("mongoose");
const AddressSchema = new mongoose.Schema({
    name: String,
    street_name: String,
    house_no: String
})

const UserSchemaDef = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive"
    },
    role: {
        type: String,
        enum: ["admin", "seller", "customer"],
        default: "customer"
    },
    role_id: {
        type: mongoose.Types.ObjectId,
        ref: "Role"
    },
    address: {
        shipping: AddressSchema,
        billing: AddressSchema
    },
    reset_token: {
        type: String
    },
    image: [String]
}, {
timestamps: true
});

const User = mongoose.model('User', UserSchemaDef);

module.exports = User;