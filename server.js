const express = require('express');
const path = require('path');

const app = express();
const port = 3000;


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});


app.get("/usuario", function(req, res) {
    res.sendFile(path.join(__dirname + '/public/usuario.html'));
});

app.use(express.static(__dirname + '/public'));


app.listen(port);
console.log('App is listening on port ' + port);