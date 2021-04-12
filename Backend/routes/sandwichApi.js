const express = require("express");

const Sandwich = require("../models/sandwichSchema");
const router = express.Router();

////////////////// add_sandwich ///////////////////////

router.post("/sandwich", (req, res) => {
  const sandwich = new Sandwich(req.body);
  sandwich.save()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => console.log(error));
});

////////////////// delete_sandwich ////////////////////

router.delete('/deleteSandwich/:id',(req,res)=> {
    _id=req.params.id
    Sandwich.findByIdAndDelete(_id)
    .then (()=>{res.send('deleted , verifier data base')})
    .catch (err => console.log("err"))
  })

//////////////// edit_sandwich ///////////////////////

  router.put('/editSandwich/:id' , (req,res)=> {
    Sandwich.findByIdAndUpdate(req.params.id,req.body,{new:true})

    .then(result => {res.send(result)})
    .catch (err => console.log(err))
  })

//////////////////////////////////////////////////////

router.put ('/affect/:idSandwich/:idIngrediants' , (req,res) =>{

  Sandwich.findByIdAndUpdate(req.params.idSandwich , {$push:{ingrediants :  req.params.idIngrediants}})
  .then(result => {res.send(result)})
  .catch (err => console.log(err))

})

///////////////// get all ///////////////////

router.get('/findAllSandwichs',(req,res)=>{
  Sandwich.find()
  .then(result => {res.send(result)})
  .catch (err => console.log(err))
})
  
module.exports = router;
