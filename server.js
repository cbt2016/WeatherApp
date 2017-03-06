/**
 * Created by Touil on 03/03/2017.
 */

var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(3000,function(){
    console.log('server is running on port 3000');
});