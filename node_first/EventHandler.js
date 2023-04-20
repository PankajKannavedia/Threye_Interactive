var express = require('express');
var app = express();
const port = 3000;
var events =  require('events');
var eventEmitter = new events.EventEmitter();

var myHandler = function(){
    console.log("Hello World");
};

eventEmitter.on('Scream',myHandler);

eventEmitter.emit('scream');

app.listen(port , function(req,res){
    console.log(`port is ${port}`)
});

