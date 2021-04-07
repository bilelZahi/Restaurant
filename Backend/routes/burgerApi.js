const express = require("express");

const Burger = require("../models/burgerSchema");
const router = express.Router();

/////////////////////////////////////////

router.post("/burger", (req, res) => {
  const burger = new Burger(req.body);
  burger.save()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => console.log(error));
});

////////////////////////////////////////

router.delete('/deleteBurger/:id',(req,res)=> {
    _id=req.params.id
    Burger.findByIdAndDelete(_id)
    .then (()=>{res.send('deleted , verifier data base')})
    .catch (err => console.log("err"))
  })

////////////////////////////////////////

  router.put('/editBurger/:id' , (req,res)=> {
    Burger.findByIdAndUpdate(req.params.id,req.body,{new:true})

    .then(result => {res.send(result)})
    .catch (err => console.log(err))
  })

  ///////// affect ingrediants to burger ///////

  router.put ('/affect/:idBurger/:idIngrediants' , (req,res) =>{

    Burger.findByIdAndUpdate(req.params.idBurger , {$push:{ingrediants :  req.params.idIngrediants}})
    .then(result => {res.send(result)})
    .catch (err => console.log(err))
  
  })

  ///////////////// get all ///////////////////

router.get('/findAllBurgers',(req,res)=>{
  Burger.find()
  .then(result => {res.send(result)})
  .catch (err => console.log(err))
})
  


module.exports = router;

