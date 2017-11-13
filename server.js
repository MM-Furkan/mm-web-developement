const express = require('express');
var app  = express();
const port = process.env.PORT || 3000;
app.use(express.static(__dirname));
console.log(__dirname);

console.log(`server is running on ${port}`);
app.listen(port);
