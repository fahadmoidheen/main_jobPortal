const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const AppliedJobSchema = new Schema ({

        uname:String,
        Uemail:String,
        Cemail:String,
        hq:String,
        phoneno:String,
        skill:String,
        experience:String,
        job_id:String,
        status:Boolean,
        lastdate:String,
        cname:String,
        jobtype:String,
        jobdesc:String,
        jobrole:String

})


var ApplyJobdata = mongoose.model('appliedjobdata', AppliedJobSchema);



module.exports = ApplyJobdata;




