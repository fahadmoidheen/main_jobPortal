const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const JobSchema = new Schema ({
   
    jobrole:String,
    email:String,
    jobdesc:String,
    hq:String,
    lastdate:String,
    skill:String,
    experience:String,
    jobtype:String,
    cname:String
    
});



var Jobdata = mongoose.model('jobdata', JobSchema);



module.exports = Jobdata;