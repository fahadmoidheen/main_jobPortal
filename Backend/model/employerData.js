const mongoose = require("mongoose");
const Schema =mongoose.Schema

const employerSchema =new Schema({
   name:String,
    email:String,
    phone:String,
    company:String,
    password:String,
    compdesc:String,
    status:Boolean
});
var employerdata =mongoose.model('employerdata',employerSchema);
module.exports=employerdata;