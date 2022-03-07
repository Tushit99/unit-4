const express = require('express');

const app = express();

const books = require('./data')

app.get("/Home" ,function (request,response){
    response.send("Hello");     
});    

app.get("/books" ,function (request,response){
    // response.send("Hello Books"); 
    response.send(books);
});

app.listen(4050,() => {
    console.log("listeining on port 4050");   
});

