const express = require('express');
const router = express.Router();

const User = require('../models/userSchema');
const jwt = require('jsonwebtoken')



////////////////// register ///////////////////////

router.post('/register', async (req,res) => {

   const addUser = await User.findOne({email: req.body.email});

   if(addUser==null){

   User.create(req.body)
         .then(result =>{res.json(result)})
         .catch(error =>console.log(error));

   }
   else{
   
   return res.json('email  exist!');


   }
});

/////////////////// login //////////////////////////

    router.post('/login', async (req, res) => {
      const connectedUser = await User.findOne({email: req.body.email , password : req.body.password});

      if (!connectedUser ){

         return res.json({message: 'email or password is invalid!'});

      }   
      else{

         const data  = {
            email:connectedUser.email,
            userId:connectedUser._id
          }
  
          const createToken = jwt.sign(data , 'secret' ,{expiresIn:"1d"});
         return res.json({message: 'login successfully!' , token : createToken, connectedUser });
         
      }
   }
);
  
module.exports = router;