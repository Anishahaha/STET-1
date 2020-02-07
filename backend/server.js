const express = require('express');
const app = express();
const fs = require('fs')
const path = require('path');
const multer = require('multer');
const pdfTemplate = require('pdf-template');
//const ag = require('./admitcard');
app.use(express.static(__dirname));


var upload = multer({ dest: 'uploads/' })

const PORT = process.env.PORT || 8000;
const NODE_ENV = process.env.NODE_ENV || 'development';
app.set('port', PORT);
app.set('env', NODE_ENV);

//////////////////////////////////////////////////////////////////////////////////
app.post('/', upload.single('sampleFile'), function (req, res, next){

    if (!req.file || Object.keys(req.file).length === 0) {
        console.log("No File Uploaded")
      }
    // console.log('req.file >>>', req.file); // eslint-disable-line
    // //file fetched from input(image)
    //  sampleFile = req.file
    // //path of file
    //  uploadPath =  sampleFile.path;
    //  console.log("hiiiiiiiiiiiiii")
    //  fs.writeFile(JSON.stringify(req.body),'admitcard',function(){
    //    // ag.admit();
    //         // send a html file saying registration succesful.

     })
    



//////////////////////////////////////////////////////////////////////////////////



//Server running
app.listen(PORT , function() {
    console.log('Express server listening on port ', PORT);
  })