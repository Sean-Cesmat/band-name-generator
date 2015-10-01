var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

console.log(port);

app.listen(port, function() {
   console.log('server started on port ' + port); 
});

app.get("/", function(req, res) {
   res.send("Hello Universe!"); 
});

function Adjectives() {
    this.big = true;
    this.fun = true;
    this.amazing = true;
    this.tired = true;
};

var adjective = new Adjectives();

function getRandomWord(object) {
    var propArray = Object.keys(object);
    var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
    return {word: randomProp};
};

app.get("/adjective", function(req, res) {
   res.json(getRandomWord(adjective)); 
});
