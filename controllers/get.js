console.log('yse');
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM digital_transformation", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });