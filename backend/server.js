const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const pdfTemplate = require("pdf-template");
var bodyParser = require("body-parser");
var cors = require("cors");
var db = require("./db")
//const ag = require('./admitcard');
app.use(express.static(__dirname));

var upload = multer({ dest: "uploads/" });

const PORT = process.env.PORT || 8000;
//const PORT = 8000;
const NODE_ENV = process.env.NODE_ENV || "development";
app.set("port", PORT);
app.set("env", NODE_ENV);

app.use(cors());
app.use(bodyParser());
//////////////////////////////////////////////////////////////////////////////////
app.post("/dat", upload.single("sampleFile"), function(req, res, next) {
  if (!req.file || Object.keys(req.file).length === 0) {
    console.log("lelmao");
    res.send("please upload a file");
   
  }
  else{
    console.log(req.body);
    
    fs.writeFile("carddetails", JSON.stringify(req.body), function(err) {
        if(err) {
            return console.log(err);
        }
        db.dbf()
        console.log("File saved successfully!");
    });
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
});

console.log("hiii");

//////////////////////////////////////////////////////////////////////////////////

//<<<<<<< HEAD
////ag.admit();
//====/===
///
//>>>>>>> 678befdbb376dbf954bfc788022ec22d79d0f3b2

//Server running
app.listen(PORT, function() {
  console.log("Express server listening on port ", PORT);
});
