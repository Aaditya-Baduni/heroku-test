// jshint esversion:6

const fs = require('fs');

var original = `Oh Henlo there fren!`;
var new1 = `henleo`;
var new2 = `soup`;

var all = [original, new1, new2];

var random = Math.floor(Math.random * all.length);

fs.writeFile('index.html', new2, function(err) {
    if (err) throw err;
    console.log('Done!!!');
});