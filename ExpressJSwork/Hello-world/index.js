var express = require('Express');
var app = express();
const port = 3000;

var things = require('./things.js');

//both index.js and things.js should be in same directory
app.use('/things', things);
app.listen(port , function(req,res){
    console.log(`port is ${port}`)
});
