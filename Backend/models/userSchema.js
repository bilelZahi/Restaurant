const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  
  Name : String ,
  email :  String ,
  password :  String ,
  role :[String]

  
},{timestamps:true});
const user = mongoose.model('user',userSchema);
module.exports = user;