var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "Alexey",
  password: "1997"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});