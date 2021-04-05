const express = require('express');

const User = require('../models/userSchema');
const router = express.Router();
// const jwt = require("jsonwebtoken");



// register
router.post('/register',(req,res) => {
      const user = User.create(req.body)
         .then(result =>{res.json(result)})
         .catch(error =>console.log(error));
       
       
       });
    //  login
    router.post('/login', async (req, res) => {
      const connectedUser = await User.findOne({email: req.body.email , password : req.body.password});
      if(!connectedUser )
      {
         return res.json({message: 'email or password is invalid!'});
      }   
          else{
                return res.json({message: 'login successfully!'});
          }
      }
  );
  
module.exports = router;