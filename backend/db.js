const getData = require("./app.js");

const { Pool, Client } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "student",
  password: "",
  port: "5432"
});

var cd = getData();

pool.query(
  `INSERT INTO student(cname, cmname, cfname, cemp, caddres, clang, caadhar, cgender, cemail, cmobile, cseclang, cdob, cecp, cqd, cflang, ccat, cstatus, crelax)
    VALUES(${cd.cname},${cd.cmname},${cd.cfname},${cd.cemp},${cd.caddres},${cd.clang},${cd.caadhar},${cd.cgender},${cd.cemail},${cd.cmobile},${cd.cseclang},${cd.cdob},${cd.cecp},${cd.cqd},${cd.cflang},${cd.ccat},${cd.cstatus},${cd.crelax});`,
  (err, res) => {
    console.log(err, res);
    pool.end();
  }
);
