const express = require("express");
const app = express();
const PORT = 5000;


app.set("view engine", "ejs" );

// app.get("/", (req, res) => {
//     res.render("index", {name: "Prabh"});


// })

let listOfnames =["Prabh", "Daniel", "Mac"]
let html = "<h1>Hello I am HTML</h1>"


// app.get("/", (req, res) => {
//     res.render("index", {name: listOfnames});


// })

app.get("/", (req, res) => {
    res.render("index", {name: html});


})

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})