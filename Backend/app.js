const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userApi = require('./routes/userApi');
const path = require('path');
const connect = require('./dataBase/connect.js');

app.use('/user', userApi);
app.use('/login',userApi);
app.use(bodyParser.json());

app.listen(3000,()=>{
    console.log('done');
})