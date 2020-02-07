const express = require('express');
const app = express();
const fs = require('fs')
const path = require('path');
const multer = require('multer');
app.use(express.static(__dirname));


var upload = multer({ dest: 'uploads/' })

const PORT = process.env.PORT || 8000;
const NODE_ENV = process.env.NODE_ENV || 'development';
app.set('port', PORT);
app.set('env', NODE_ENV);

//////////////////////////////////////////////////////////////////////////////////
console.log('req.file >>>', req.file); // eslint-disable-line
//file fetched from input(image)
 sampleFile = req.file
//path of file
 uploadPath =  sampleFile.path;
 
//////////////////////////////////////////////////////////////////////////////////


//Server running
app.listen(PORT , function() {
    console.log('Express server listening on port ', PORT);
  })