const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const burgerSchema = new Schema({
    
    prixBurger : String ,
    nomBurger : String ,
    compositions : Array,
    image : String,

    ingrediants : [{type : Schema.Types.ObjectId , ref : 'ingrediant'}],


    
}, {timesTamps:true});

const burger = mongoose.model('burger',burgerSchema);
module.exports = burger