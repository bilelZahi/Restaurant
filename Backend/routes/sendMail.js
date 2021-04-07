var express = require('express');
const nodemailer = require('nodemailer')
var router =express.Router();

router.post ('/sendMail' , async  (req,res)=> {
   
  console.log(req.body.email);
    let transporter = nodemailer.createTransport({
      
      service: 'gmail', 
      auth: {
        user:'bileltrabelsi445@gmail.com', 
        pass: '2020474990bilel'
      },
    });
  
    let info = await transporter.sendMail({
      from: 'bileltrabelsi445@gmail.com', 
      to: req.body.email, 
      
      subject: "BIENVENUE !", 
      text:  req.body.Name + " votre compte vient d'être créé" + "http://localhost:4200"
    });
  res.json({message:"email envoyé"})
   
    })
  
  module.exports = router;