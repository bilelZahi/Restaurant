const express = require("express");
// const ingrediant = require("../models/ingrediantsSchema");

const Ingrediant = require("../models/ingrediantsSchema");
const router = express.Router();

/////////////////////////////////////////

router.post("/ingrediant", (req, res) => {
  const ingrediant = new Ingrediant(req.body);
  ingrediant.save()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => console.log(error));
});

////////////////////////////////////////////////

router.delete('/deleteIngrediant/:id',(req,res)=> {
    _id=req.params.id
    Ingrediant.findByIdAndDelete(_id)
    .then (()=>{res.send('deleted , verifier data base')})
    .catch (err => console.log("err"))
  })

//////////////////////////////////////////////

  router.put('/editIngrediant/:id' , (req,res)=> {
    Ingrediant.findByIdAndUpdate(req.params.id,req.body,{new:true})

    .then(result => {res.send(result)})
    .catch (err => console.log(err))
  })

////////////////////////////////////////////////


  
module.exports = router;
