var express = require('express');
var app = express(express);

var port = 5000;
app.listen(port, function (err) {
    console.log('listening ' + port);
})