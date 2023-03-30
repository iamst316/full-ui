const mongoose = require('mongoose');
 
const url = 'mongodb+srv://Rohit:rohit@cluster0.vrcqw6n.mongodb.net/?retryWrites=true&w=majority';
const p2url = "mongodb+srv://iamst316:iamst316@cluster0.eioq0mv.mongodb.net/?retryWrites=true&w=majority";
const local ="mongodb://localhost:27017/laundry"
const connection=async()=>{
    mongoose.set('strictQuery', false);

   try {
     await mongoose.connect(p2url)
     console.log("mongodb is connected successfully ");

   } catch (e) {
    console.log(e);

   }
}

 module.exports = connection ;