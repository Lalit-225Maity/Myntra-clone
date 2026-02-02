const express = require('express');
const router = express.Router();
const Productmodels = require('../Models/Productmodels');
const Product = require('../Productstore/Products');
router.post('/search', async (req, res) => {
    try {
        const Products = await Productmodels.insertMany(Product);
        res.status(200).json({
            success: true,
            message: "Insert Data is Success",
            user: Products
        })
    } catch (error) {
        console.log(error.message);

    }
})
router.get('/search', async (req, res) => {
    try {
        const { Product } = req.query;
        const Items = await Productmodels.find(
            { format: { $in: Product } }
        )
        res.status(200).json({
            success: true,
            message: "Data is Fetch",
            users: Items
        })
    } catch (error) {
        console.log(error.message);
    }

})
module.exports = router;