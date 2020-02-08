const fs = require("fs");
module.exports = {
  dbf: function() {
    fs.readFile("carddetails", (err, data) => {
      if (err) throw err;
      var cd = JSON.parse(data);
      const { Pool, Client } = require("pg");
      const pool = new Pool({
        user: "postgres",
        host: "127.0.0.1",
        database: "student",
        password: "1234",
        port: "5432"
      });
      pool.query(
        `INSERT INTO candidate(cname, cmname, cfname, cemp, caddress, clang, caadhar, cgender, cemail, cmobile, cseclang, cdob, cecp, cqd, cflang, ccat, cstatus, crelax)
        VALUES('${cd.ciname}','${cd.cmname}','${cd.cfname}','${cd.cemp}','${cd.caddress}','${cd.clang}','${cd.caadhar}','${cd.cgender}','${cd.cemail}','${cd.cmobile}','${cd.cseclang}','${cd.cdob}','${cd.cecp}','${cd.cqd}','${cd.cflang}','${cd.ccat}','${cd.cstatus}','${cd.crelax}');`,
        (err, res) => {
          console.log(err, res);
          pool.end();
          const ac = require("./admitcard.js");
          ac.admit();
        }
      );
    });
  }
};
