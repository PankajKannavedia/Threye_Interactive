const path = require('path');
var express = require('express');
var app = express();
const port = 3000;
//Relative Absolute
const filePath = path.join(__dirname,"../")
//build-in middleware
app.use(express.static(filePath));

app.get('/calc', function (req, res) {
    res.sendFile(path.join(__dirname,'../html/calc.html'))
    // res.render()
});

app.get('/', function (req, res) {
    res.write('<h1>HEY <br>Welcome to Hompage </h1>')
    res.write('<h2>I am <b><i>Pankaj Kannavedia</i></b></h2>')
    res.send();
});

app.get('/hello', function (req, res) {
    res.status(200).send('Hello GET World!');
});



app.get('/about', function (req, res) {
    res.send('About <a href="https://www.instagram.com/pankaj_kannavedia">Pankaj Kannavedia</a>');
});

app.get('/Details', function (req, res) {
    res.json([{
            name: 'Pankaj Kannavedia',
            Contact: 7566545206,
            Roll_No: 'MCA/45013/21',
            Branch: 'CSE',
        },
        {
            name: 'Rahul Kannavedia',
            Contact: 7247298670,
            Roll_No: 'NA',
            Branch: 'CA',
        },
        {
            name: 'Ajay Mandloi',
            Contact: 8818978002,
            Roll_No: 'NA',
            Branch: 'CSE',
        },
    ]);
});


app.listen(port, function (req, res) {
    console.log("Server is running at port no. 3000")
});