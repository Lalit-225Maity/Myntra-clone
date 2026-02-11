const express = require('express');
const router = express.Router();
const Ordermodel = require('../Models/Ordermodel');
router.post('/order', async (req, res) => {
    try {
        const { Productname, UserName, ContactInfo, Price, status,ProductImage,DeliverAddress,PIN_NO,COD} = req.body;
        const CustomerOrder = new Ordermodel({ Productname, UserName, ContactInfo, Price, status,ProductImage,DeliverAddress,PIN_NO,COD});
        await CustomerOrder.save();
        res.status(200).json({
            success: true,
            message: "Success",
            order: CustomerOrder
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Crash->Something went wrong"
        })
    }
})
router.get('/order', async (req, res) => {
    try {
        const { ContactInfo } = req.query;
        const checkuser = await Ordermodel.find({
            ContactInfo: { $in: ContactInfo }
        });
        if (checkuser) {
            res.status(200).json({
                success: true,
                message: "order fetch is complete",
                userorder: checkuser

            })
        }
        else {
            res.status(500).json({
                success: false,
                message: "Crash->Something went wrong"
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Crash->Something went wrong"
        })
    }
})

router.delete('/cancel',async(req,res)=>{
    try {
        const{_id}=req.query;
        const Delete=await Ordermodel.findOneAndDelete({_id});
        res.status(200).json({
            message:"Delete is Complete",
            del:Delete
        })

    } catch (error) {
        console.log(error.message);
        
    }
})
module.exports = router;