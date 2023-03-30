const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    stateName:String,
    district:String,
    pincode:Number,
    address:String,
    password:String
});

exports.userSchema= userSchema;

//this is just for the demo data, feel free to use the final submission from jayanth