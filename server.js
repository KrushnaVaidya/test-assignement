const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {PORT} = require('./config/config')
const {validator} = require('./middlerware/validator');
const {signupHandler} = require('./handler/userHandler')

 app.use(bodyParser);

 app.listen(PORT, ()=>{
     console.log(`Server is started on Port:  ${PORT}` );
 })

 app.post('/signup', validator, signupHandler);
 