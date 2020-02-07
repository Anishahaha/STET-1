const express = require('express');
const app = express();
const fs = require('fs')
const path = require('path');
app.use(express.static(__dirname));


const PORT = process.env.PORT || 8000;
const NODE_ENV = process.env.NODE_ENV || 'development';
app.set('port', PORT);
app.set('env', NODE_ENV);




//Server running
app.listen(PORT , function() {
    console.log('Express server listening on port ', PORT);
  })