const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const port = 3000;

const array = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];


app.get('/greeting', (req, res) => {
    res.send("Hello stranger.");
});

app.get('/greeting/:name', (req, res) => {
    res.send("What's up, " + req.params.name + "!");
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send("Your tip is " + req.params.total*(req.params.tipPercentage/100));
});

app.get('/magic/:phrase/', (req, res) => {
    res.send(`<h1>${req.params.phrase}</h1>
    <h2>${array[Math.floor(Math.random() * array.length)]}</h2>`);
});

app.listen(port, () => {
    console.log("It's working!");
});