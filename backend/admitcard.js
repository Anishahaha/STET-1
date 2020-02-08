const pdfTemplate = require('pdf-template');
const fs = require('fs');
const db = require('db');
const abc = fs.readFileSync('admitcard');


const kkk = JSON.parse(abc);

console.log(kkk)
 module.exports = {
     admit: function (){
        pdfTemplate({
            template: 'example.pdf',
            output: `${kkk.roll_no}.pdf`,
            data: {
                "ciname": kkk.cinname,
                "cmname": kkk.cmname,
                "cfname": kkk.cfname,
                "cemp": kkk.cemp,
                "caddress": kkk.caddress,
                "clang": kkk.clang,
                "caadhar": kkk.caadhar,
                "cgender": kkk.cgender,
                "cemail": kkk.cemail,
                "cmobile": kkk.cmobile,
                "cseclang": kkk.cseclang,
                "cdob": kkk.cdob,
                "cecp": kkk.cecp,
                "cqd": kkk.cqd,
                "cflang": kkk.cflang,
                "ccat": kkk.ccat,
                "cstatus": kkk.cstatus,
                "crelax": kkk.crelax
            }
            
          }).then((res) => {
            console.log(res)
          }).catch((err) => {
            console.error(err)
          })
        

      //push the json object to database
          db.updateDb();
     }
 }
