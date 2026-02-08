const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Usermodel = require('../Models/Usermodels');
const { redirect } = require('react-router-dom');
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
                const token = jwt.sign({ Email:exists.Email }, "key");
                res.cookie("token", token);
                res.status(200).json({
                    success:true,
                    message:"Login is Complete",
                    user:exists
                })
            }
        })
    } catch (error) {

    }
})
router.post('/logout',(req,res)=>{
    try {
        res.clearCookie("token");
        res.status(200).json({
            message:"User is Log out"
        })
    } catch (error) {
        
    }
})
module.exports = router