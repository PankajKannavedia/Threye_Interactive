var express = require('express');
var app = express();

app.get('/',function(req,res){
     res.send("Name and ID is Specified in this program.<br>"+
     "Check Browser by changing this URL's \nhttp://localhost:3000<br>"+
     "http://localhost:3000/Pankaj<br>"+
     "http://localhost:3000/123<br>"+
     "http://localhost:3000/Pankaj/123<br>");
});
app.get('/:name',function(req,res){
     res.send('The ID you specified is : ' + req.params.name);
});
app.get('/:id',function(req,res){
     res.send('The ID you specified is : ' + req.params.id);
});
app.get('/:name/:id',function(req,res){
     res.send('The ID you specified is : '+ req.params.name + req.params.id);
});

app.listen(3000,function(req,res){
    console.log("Name and ID is Specified in this program."+
    "\nCheck Browser by changing this URL's \nhttp://localhost:3000"+
    "\nhttp://localhost:3000/Pankaj"+
    "\nhttp://localhost:3000/123"+
    "\nhttp://localhost:3000/Pankaj/123");
})