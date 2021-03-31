const express = require('express');
const connect = require('./dataBase/connect');
const userApi = require('./routes/userApi');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
var urlencodeParser = bodyParser.urlencoded({extended:false});

// const path = require('path');
// const cors = require('cors');

app.use('/user', userApi);
app.use('/login',userApi);

// app.use(cors())

app.listen(3000,()=>{
    console.log('done');
})