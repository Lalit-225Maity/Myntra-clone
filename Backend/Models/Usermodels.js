const { Schema, model } = require('mongoose');
const User = new Schema({
    Username: {
        required: [true, "This is Mandatory"],
        type: String,
    },
    Email: {
        required: [true, "Email is Required"],
        type: String,

    },
    Password: {
        required: [true, "Give a Strong Password"],
        type: String,
        match: [
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
            "Password must be at least 8 characters and include uppercase, lowercase, and a number"
        ]
    },
    PhoneNumber: {
        type: String,
        match: [/^[0-9]{10}$/, "Phone Number Must be exactly 10 digits"]

    }
})
const Usermodel = model("User", User);
module.exports = Usermodel;