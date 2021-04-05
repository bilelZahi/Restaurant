const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sandwichSchema = new Schema({
    prixPrincipale : String ,
    nom : String ,
    lesComposants : [String],
    image:String
    
}, {timesTamps:true});

const sandwich = mongoose.model('sandwich',sandwichSchema);
module.exports = sandwich