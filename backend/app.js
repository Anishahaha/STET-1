const fs = require("fs");

const dataBuffer = fs.readFileSync("carddetails");
const parsedData = JSON.parse(dataBuffer);

//console.log(parsedData);
const getData = function() {
  return parsedData;
};

module.exports = getData;
