const express = require('express');

const user = require('../models/userSchema');
const router = express.Router();
// const jwt = require("jsonwebtoken");



// register
router.post('/register', async (req, res) => {
    
    const userFound = await user.findOne({email: req.body.email});
    if(!userFound)
    {
     return res.json({message: 'E-mail address is already used!'});
    }
  
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    
    const userData = req.body; 
    userData.password = hash; 
 
 const createdUser = await user.create(userData);
 res.json(createdUser);
});
    //  login
    router.post('/login', async (req, res) => {
      const connectedUser = await user.findOne({email: req.body.email , password : req.body.password});
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