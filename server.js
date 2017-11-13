const express = require('express');
var app  = express();

app.use(express.static(__dirname));
console.log(__dirname);

app.get('/ind' (req, res) => {
  res.render();
})
app.listen(3003);
