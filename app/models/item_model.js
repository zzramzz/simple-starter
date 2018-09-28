const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    Title :{
        type : String
    },
    Price : {
        Type : Number
    },
    inStock : {
        type : Number
    },
    photo : {
        type : String
    },
    desc : {
        type: String
    },
    type : {
        type : String
    }
})
module.exports = Item = mongoose.model('Item', itemSchema);