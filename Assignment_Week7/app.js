const express = require("express");
const app = express();
const PORT = 5000;

let today = new Date();

let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = `${mm}/${dd}/${yyyy}`;
let data = {

    name: "Bill",
    email: "123@gmail.com",
    date: today,
    contact: "1234567890",

    socials: {

        "https://cdn.iconscout.com/icon/free/png-128/facebook-35-83440.png": "https://www.facebook.com/",

        "https://www.clipartmax.com/png/small/83-836235_ceo-and-member-of-board-of-directors-in-naghsh-avval-linkedin-icon.png": "https://www.linkedin.com/"

    }

}


app.set("view engine", "ejs");



app.get("/", (req, res) => {

    //res.render("index.ejs",{name: userName, email: userEmail});
    res.render("index.ejs", { userData: data });

})



app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})