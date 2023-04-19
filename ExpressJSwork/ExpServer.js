const express = require('express');
const app = express();
const port = 3000;

app.get("/", function (req, res) {

    res.send("Helletgoijpoeo World");
});
app.listen(3000, function (req, res) {
    console.log("Server is running at port no. 3000")
});