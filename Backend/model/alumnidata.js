const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost:27017/alumnidata',{ useNewUrlParser: true , useUnifiedTopology: true })
const addalumniSchema = new Schema({
  uname: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  hq: String,
  city: String,
  status: Boolean,

});

var alumnidata = mongoose.model('alumni', addalumniSchema);

module.exports = alumnidata;