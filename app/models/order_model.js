const mongoose = require('mongoose');

const orderSchema  = new mongoose.Schema({
    user : {
        type : new mongoose.Schema({
            name : {
                type : String,
                required :true,
                minlength:3,
                maxlength : 50
            },
            phone: {
                type: Number,
                required : true
            }
        }),
        required: true
    },
    items : {
        type : new mongoose.Schema({
            title : {
                type : String,
                required :true,
            },
        price: {
            type : Number,
            required: true
        }
        })
    },
    qty : {
        type : Number
    }


})

module.exports = Order = mongoose.model('Order',orderSchema)