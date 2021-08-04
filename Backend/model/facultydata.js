const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const FacultySchema = new Schema ({
    uname: String,
    email: String,
    password: String,
    hq: String,
    phoneno: String,
    experience:String,
    skill:String
    
});



var Facultydata = mongoose.model('facultydata', FacultySchema);



module.exports = Facultydata;