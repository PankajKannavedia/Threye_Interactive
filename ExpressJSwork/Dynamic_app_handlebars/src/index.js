const path = require('path');
var express = require('express');
const { engine } =  require('express-handlebars');
const port = 3001;

const app = express();
//Built in middleware
const filePath = path.join(__dirname, "../public")


// To set the view Engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


// Templet engine route
app.get("", (req, res) => {
    res.render("index");
});


app.get('/', function (req, res) {
    res.write('<h1>HEY <br>Welcome to Hompage </h1>')
    res.write('<h2>I am <b><i>Pankaj Kannavedia</i></b></h2>')
    res.send();
});



app.get('/about', (req, res) => {
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


app.listen(port, (req, res)=> {
    console.log("Server is running at port no. 3001")
});