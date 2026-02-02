const { Schema, model } = require('mongoose');
const Products = new Schema({
    Brand: {
        type: String,
    },
    Price: {
        type: Number,
        min: [100, "This is Error"],
        max: [20000, "Price is Exceeding"]
    },
    Offer: {
        type: String
    },
    image: {
        type: String
    },
    Actualprice: {
        type: Number,
    },
    format: {
        type: [String]
    }


})
const Product = model("Products", Products);
module.exports = Product;