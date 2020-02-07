module.exports = {  
 dbf: function(){const getData = require("./carddetails.json");
const ac = require("./admitcard.js")

const { Pool, Client } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "student",
  password: "1234",
  port: "5432"
});



var cd = fs.readFilesync(carddetails);
cd = JSON.parse(cd);
var clink = "https://localhost/uploads" + cd.caadhar;
pool.query(
  `INSERT INTO candidate(cname, cmname, cfname, cemp, caddress, clang, caadhar, cgender, cemail, cmobile, cseclang, cdob, cecp, cqd, cflang, ccat, cstatus, crelax, clink)
    VALUES('${cd.ciname}','${cd.cmname}','${cd.cfname}','${cd.cemp}','${cd.caddress}','${cd.clang}',${cd.caadhar},'${cd.cgender}','${cd.cemail}','${cd.cmobile}','${cd.cseclang}','${cd.cdob}','${cd.cecp}','${cd.cqd}','${cd.cflang}','${cd.ccat}','${cd.cstatus}','${cd.crelax},'${clink}');`,
  (err, res) => {
    console.log(err, res);
    pool.end();
  }
);

ac.admit();}}