const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Usermodel = require('../Models/Usermodels');
router.post('/create', (req, res) => {
    try {
        const { Username, Email, PhoneNumber, Password, rePassword } = req.body;
        if (rePassword !== Password) {
            return res.status(401).json({
                message: "Something went wrong"
            })
        }
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(Password, salt, async (err, hash) => {
                const newUser = new Usermodel({
                    Username,
                    Email,
                    PhoneNumber,
                    Password: hash,
                })
                const token = jwt.sign({ Email }, "key");
                res.cookie("token", token);
                await newUser.save();
                res.status(200).json({
                    success: true,
                    message: 'User is Created',
                    users: newUser
                })

            })
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})
router.post('/login', async (req, res) => {
    try {
        const { Email, Password } = req.body;
        const exists = await Usermodel.findOne({ Email });
        if (!exists) {
            res.status(500).json({
                message: "Something went wrong"
            })
        }
        bcrypt.compare(Password, exists.Password, (err, result) => {


            if (result) {
                const token = jwt.sign({ Email: exists.Email }, "key");
                res.cookie("token", token);
                res.status(200).json({
                    success: true,
                    message: "Login is Complete",
                    user: exists
                })
            }
            else {
                res.status(500).json({
                    success: false,
                    message: "Password do not match",
                })
            }
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
})
router.post('/logout', (req, res) => {
    try {
        res.clearCookie("token");
        res.status(200).json({
            message: "User is Log out"
        })
    } catch (error) {

    }
})
router.put('/update', async (req, res) => {
    try {
        const { Email, newPassword } = req.body;
        const userEmail = await Usermodel.findOne({ Email });
        if (!userEmail) {
            return res.status(500).json({

                message: "Wrong Email id"
            })
        }
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newPassword, salt, async (err, hash) => {
                const Pass = { newPassword: hash }
                const Update = await Usermodel.findOneAndUpdate({ Email }, { Password: Pass.newPassword }, { new: true });
                if (Update) {
                    const token = jwt.sign({ Email: Update.Email }, "key");
                    res.cookie("token", token);
                }

                res.status(200).json({
                    success: true,
                    message: "Hi this is scuccess",
                    myuser: Update
                })
            }

            )
        })



    } catch (error) {
        res.send(error.message)
    }
})
module.exports = router