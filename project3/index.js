const express = require("express");
const app = express();
const books = require("./books.json")

app.use(allbooks)

app.get("/books", (req, res) => {
    res.send(books);
});

function allbooks(req, res, next) {
    console.log("My books")
    next();
};

app.get("/books/:name",singleBook,(req,res) => {
    res.send({bookName: req.name});
});

function singleBook(req,res,next){
    console.log(req.params.name);
    req.name = req.params.name;
    next();
};


app.listen(4340, () => {
    console.log("port no. 4340");
});

