const express = require("express");

const app = express();
app.get("/", (_req, res) => {
  res.send("Hello WOrld");
});

var server = app.listen(4000, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Exammple app listening at http://localhost/", host, port);
});
