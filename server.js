'use strict';

var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var port = process.env.PORT || 3000;
var Adjectives = require("./lib/adjectives.js");
var Nouns = require("./lib/nouns.js");
var Verbs = require("./lib/verbs.js");
var getRandomWord = require("./lib/getRandomWord.js");
var postWord = require("./lib/postWord.js");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/app/'));

app.listen(port, function() {
   console.log('server started on port ' + port); 
});
console.log(port);
/*
app.get("/", function(req, res) {
   res.send("Hello Universe!"); 
});
*/

var adjective = new Adjectives();
var verb = new Verbs();
var noun = new Nouns();


app.get("/adjective", function(req, res) {
   res.json(getRandomWord(adjective)); 
});

app.get("/noun", function(req, res) {
   res.json(getRandomWord(noun)); 
});

app.get("/verb", function(req, res) {
    res.json(getRandomWord(verb));
});

app.get("/", function(req, res) {
   res.sendFile(index.html); 
});

app.post("/adjective", function(req, res) {
   var word = postWord(req.body.word, adjective);
   res.json(word); 
});

app.post("/verb", function(req, res) {
   var word = postWord(req.body.word, verb);
   res.json(word); 
});

app.post('/noun', function(req, res) {
   var word = postWord(req.body.word, noun);
   res.json(word); 
});
