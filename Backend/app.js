const express = require('express');
const connect = require('./dataBase/connect');

const userApi = require('./routes/userApi');
const sandwichSchemaApi = require ('./routes/sandwichSchemaApi');
const ingrediantsSchemaApi = require ('./routes/ingrediantsSchemaApi')
const burgerSchemaApi = require ('./routes/burgerSchemaApi')
const tacosSchemaApi = require ('./routes/tacosSchemaApi')

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
var urlencodeParser = bodyParser.urlencoded({extended:false});

app.use ('/user', userApi);
app.use ('/login',userApi);
app.use ('/menu' , sandwichSchemaApi);
app.use ('/menu' , ingrediantsSchemaApi);
app.use ('/menu' , burgerSchemaApi);
app.use ('/menu' , tacosSchemaApi);




// app.use(cors())

app.listen(3000,()=>{
    console.log('done');
})