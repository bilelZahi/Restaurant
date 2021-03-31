const mongoose = require('mongoose');
const mongoUrl=""
const connect =mongoose.connect(mongoUrl,{

    useNewUrlParser: true,
      useFindAndModify: false,
    // useCreateIndex: true,
    useFindAndModify:false
  }).then(result =>()=>{
      console.log('server is http://localhost/3000');
  }).catch(error =>console.log(error)); 
  module.exports=connect;