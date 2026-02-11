const { Schema, model } = require('mongoose');
const ProductOrder = new Schema({
    Productname: {
        required: true,
        type: String,
    },
    UserName: {
        required: true,
        type: String
    },
    ContactInfo:{
        type:Number
    },
    Price: {
        type: Number
    },
    status:{
        type:String,
    },
    ProductImage:{
        type:String
    },
    DeliverAddress:{
        type:String
    },
    PIN_NO:{
        type:Number
    },
    COD:{
        type:String
    }

})
const CustomerOrder=model("Order",ProductOrder);
module.exports=CustomerOrder;
