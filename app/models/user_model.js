const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    phone : {
        type: Number,
        required : true
    },
    username : String,
    email : String,
    password : String,
})

module.exports = User = mongoose.model('User' , userSchema);
