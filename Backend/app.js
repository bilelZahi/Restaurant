const express = require('express');
const connect = require('./dataBase/connect');

const userApi = require('./routes/userApi');
const sandwichSchemaApi = require ('./routes/sandwichSchemaApi');
const ingrediantsSchemaApi = require ('./routes/ingrediantsSchemaApi')

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
var urlencodeParser = bodyParser.urlencoded({extended:false});

// const path = require('path');
// const cors = require('cors');

app.use('/user', userApi);
app.use('/login',userApi);
app.use ('/menu' , sandwichSchemaApi)
app.use ('/menu' , ingrediantsSchemaApi)



// app.use(cors())

app.listen(3000,()=>{
    console.log('done');
})