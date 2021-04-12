const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tacosShema = new Schema({
    prixPrincipale : String ,
    nom : String ,
    compositions : Array,
    image : String,

    ingrediants : [{type : Schema.Types.ObjectId , ref : 'ingrediant'}],

    
}, {timesTamps:true});

const tacos = mongoose.model('tacos',tacosShema);
module.exports = tacos