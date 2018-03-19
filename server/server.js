//
let express = require('express');
let app=express();
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('server/public'));

let port = 4567;

app.listen(port, function(){
    console.log('server on port', port);
});