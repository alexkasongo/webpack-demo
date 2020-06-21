const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// route on which our application will react
app.get('/hello-world/', function (req, res) {
    // res.send('some dummy content');
    const pathToHtmlFile =  path.resolve(__dirname, '../dist/hello-world.html');
    const contentFromHtmlFile =  fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
}) 
app.get('/kiwi/', function (req, res) {
    // res.send('some dummy content');
    const pathToHtmlFile =  path.resolve(__dirname, '../dist/kiwi.html');
    const contentFromHtmlFile =  fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
}) 

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.listen(3000, function () {
    console.log(`server.js - 10 - application running on http://localhost:3000/`);
})