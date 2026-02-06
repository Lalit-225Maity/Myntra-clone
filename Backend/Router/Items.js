const express = require('express');
const router = express.Router();
const API = require('../APICall/Products');
router.get('/search', async (req, res) => {
    try {
        const { q } = req.query;
        const rest = await API.get('/amazon/search', {
            params: {
                "query": `${q}`,
                "light_request": "true",
                "country": "in",
                "domain": "in",
                "language": "en_IN",
                "currency": "INR",
                "sort_by": "price_high_to_low",
                "start_page": "1",
                "pages": "1"

            }
        })
        res.status(200).json({
            success: true,
            message: "Data is Fetch",
            user: rest.data.products
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })

    }
})
module.exports = router
