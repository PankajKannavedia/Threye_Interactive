var express = require(`express`);
var app = express();
const port = 3000;

app.get('/', function(req,res){
    res.write('<h1>HEY <br>Welcome to Hompage </h1>')
    res.write('<h2>I am <b><i>Pankaj Kannavedia</i></b></h2>')
    res.send();
});

app.get('/hello', function(req,res){
    res.send('Hello GET World!');
});

app.get('/about', function(req,res){
    res.send('<h1><h1>');
});

app.get('/Details', function(req,res){
    res.send({
        name : 'Pankaj Kannavedia',
        Contact : 7566545206,
        Roll_No : 'MCA/45013/21',
        Branch : 'CSE',
    });
});


app.listen(port, function (req, res) {
    console.log("Server is running at port no. 3000")
});