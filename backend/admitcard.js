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
            output: 'output.pdf',
            data: {
              name: kkk.name,
              age: kkk.age,
              email: kkk.email,
              birthdate: kkk.birthdate,
              roll_no: kkk.roll_no
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