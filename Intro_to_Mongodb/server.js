const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
require('dotenv').config();
//User model coming from user.js
const User = require("./models/user");

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, (error) => {
    if (error) {
        console.error(`There was an error : ${error}`);
    } else {
        console.log("Connected to the database");
    }
})

app.get("/", (req, res) => {
    res.send("USER ENDPOINTS!");
})

app.get("/users", (req, res) => {
    //returns async response
    //then is waiting for the response
    //User helps me get hold of information from mongodb atlas server
    User.find().then((users) => {
        return res.status(200).json({
            message: "Successfully fetched the user",
            data
        })

    })

});

app.post("/users", (req, res) => {
    let newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber
    }
    //We are making an instance of User Model
    const user = new User(newUser);

    user.save().then((response) => {
        return res.status(201).json({
            message: "User created successfully",
            data
        })
    })
})


app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`);
})