const express = require('express');

const User = require('../models/userSchema');
const router = express.Router();


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
       console.log(verif);
      const connectedUser = await User.findOne({email: req.body.email , password : req.body.password});

      if (!connectedUser ){

         return res.json({message: 'email or password is invalid!'});

      }   
      else{

         return res.json({message: 'login successfully!'});
         
      }
   }
);
  
module.exports = router;