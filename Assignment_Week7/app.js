const express = require("express");
const app = express();
const PORT = 5000;


app.set("view engine", "ejs");

let data = {
    name: "Bill",
    email: "123@gmail.com",
}

app.get("/", (req, res) => {
   
     //res.render("index.ejs",{name: userName, email: userEmail});
        res.render("index.ejs", {userData: data});
})



app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})