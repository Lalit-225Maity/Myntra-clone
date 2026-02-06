const { Schema, model } = require('mongoose');
const User = new Schema({
    Username: {
        required: [true, "This is Mandatory"],
        type: String,
    },
    Email: {
        required: [true, "Email is Required"],
        type: String
    },
    Password: {
        required: [true, "Give a String Password"],
        type: String
    },
    PhoneNumber: {
        type: String,
        minlength: [10, "Phone number must be exactly 10 digits"]

    }
})
const Usermodel=model("User",User);
module.exports=Usermodel;