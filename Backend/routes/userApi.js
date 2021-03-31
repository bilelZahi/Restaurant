const express = require('express');

const user = require('../models/userSchema');
const router = express.Router();


// register
router.post('/addNewUser',(req,res) => {
  console.log(req.body);
      user.create(req.body)
       .then(result =>{res.json(result)})
       .catch(error =>console.log(error));
     
     
     });
    //  login
    router.post('/login', async (req, res) => {
      const connectedUser = await User.findOne({email: req.body.email , password : req.body.password});
      if(connectedUser ===null)
      {
         return res.json({message: 'email or password is invalid!'});
      }   
          else{
                return res.json({message: 'login successfully!'});
          }
      }
  });
module.exports = router;