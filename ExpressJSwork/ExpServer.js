const express = require('express');
const app = express();
const port = 3000;

app.get("/", function (req, res) {

    res.send("Hello World");
    console.log("res",res)
});
app.listen(port, function (req, res) {
    console.log("Server is running at port no. 3000")
});