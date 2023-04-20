var express = require(`express`);
var app = express();
const port = 3000;

app.get('/', function(req,res){
    res.send('Hello');
    console.log("Printing Hello ")
});
app.get('/hello', function(req,res){
    res.send('Hello GET World!');
    console.log("Printing Hello Get world ")
});
app.get('/about', function(req,res){
    res.send('Contact - 7566545206');
    console.log("Printing Contact")
});

app.post('/hello', function(req,res){
    res.send('Hello POST World!');
    console.log("Printing Hello POST world ")
});

app.all('/test', function(req, res){
    res.send("HTTP method doesn't have any effect on this route!");
 });
 
app.listen(port, function (req, res) {
    console.log("Server is running at port no. 3000")
});