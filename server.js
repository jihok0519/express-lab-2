const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const port = 3000;

app.get('/greeting', (req, res) => {
    res.send("Hello stranger.");
})

app.get('/greeting/:name', (req, res) => {
    res.send("What's up, " + req.params.name + "!");
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send("Your tip is " + req.params.total/req.params.tipPercentage);
});

app.get('/magic')

app.listen(port, () => {
    console.log("It's working!");
})