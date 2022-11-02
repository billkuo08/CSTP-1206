const express = require("express");
const app = express();
const PORT = 5000;

let today = new Date();

let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = `${mm}/${dd}/${yyyy}`;
let data = {

    name: "Name: Bill Kuo",
    email: "Email: 123@gmail.com",
    date: "Date account created: " + today,
    contact: "Phone-Number: 1234567890",

    socials: {

        "https://www.babysafehomes.com/wp-content/uploads/2013/07/small-blue-facebook-icon.png": "https://www.facebook.com/",
        "https://cdn-icons-png.flaticon.com/512/174/174857.png": "https://www.linkedin.com/",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/800px-Twitter-logo.svg.png": "https://twitter.com/"

    }

}

app.set("view engine", "ejs");

app.use(express.static("css"));

app.get("/", (req, res) => {

    //res.render("index.ejs",{name: userName, email: userEmail});
    res.render("index.ejs", { userData: data });

})



app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})