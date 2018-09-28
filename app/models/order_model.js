const mongoose = require('mongoose');

const orderSchema  = new mongoose.Schema({
    user : {
        type : String,
        ref: User
    },
    items : {
        type : String
    },
    qty : {
        type : Number
    }


})

module.exports = Order = mongoose.model('Order',orderSchema)