//
let express = require('express');
let app=express();
let bodyParser = require('body-parser');
let calculate = require('./public/modules/calculate.js')

let mostRecentAnswer = 0;
let calculateHistory = [];

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('server/public'));

let port = 4567;

app.listen(port, function(){
    console.log('server on port', port);
});

app.get('/answer', function(req, res){
    res.send({answer: mostRecentAnswer});
});

app.post('/doMath', function(req, res){
    console.log('in do math', req.body);
    mostRecentAnswer = calculate(req.body);
    calculateHistory.push(req.body);
    console.log('in most recent answer: ', mostRecentAnswer);
    res.sendStatus(200);
});

app.get('/history', function(req, res){
    res.send(calculateHistory);
});