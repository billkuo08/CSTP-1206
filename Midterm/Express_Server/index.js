const e = require("express");
const express = require("express");
const app = express();
const PORT = 5000;

let employeeList = [
    {
        id: 1,
        name: "Mike",
        email: "mike@company.ca",
        employeeID: 100,
        department: "IT",
        Salary: 100000
    },
    {
        id: 2,
        name: "Daniel",
        email: "daniel@company.ca",
        employeeID: 101,
        department: "HR",
        Salary: 50000
    },
    {
        id: 3,
        name: "Bill",
        email: "bill@company.ca",
        employeeID: 102,
        department: "Marketing",
        Salary: 880000
    }

]


app.use(express.json());

app.get("/", (req, res) => {
    res.redirect("/employees")
})

//BONUS
app.get("/employees/salary", (req, res) => { 
    
    const sortList = employeeList.sort((a, b) => (b.Salary > a.Salary) ? 1 : -1);
    return res.status(200).json({
        message: "Succesfully fetched the articles",
        data: sortList
    })


})

//I used another sort fucntion here so it doesnt get affect by the bonus api
app.get("/employees", (req, res) => {
    const sortList = employeeList.sort((a, b) => (a.id > b.id) ? 1 : -1);

    return res.status(200).json({
        message: "Succesfully fetched the articles",
        data: sortList
    })
})

app.get("/employees/:department", (req, res) => {
    const department = req.params.department;
    const findEmployee = employeeList.find((employeeList) => employeeList.department === department ? true : false);
    if (findEmployee) {
        return res.status(200).json({
            message: "Succesfully fetched the data",
            data: findEmployee
        })
    } else {
        return res.status(404).json({
            message: "Employee Doesn't Exist",
        })
    }


})
app.get("/employees/id/:employeeID", (req, res) => {
    const employeeID = req.params.employeeID;
    const findEmployee = employeeList.find((employeeList) => employeeList.employeeID == employeeID ? true : false);
    if (findEmployee) {
        return res.status(200).json({
            message: "Succesfully fetched the data",
            data: findEmployee
        })
    } else {
        return res.status(404).json({
            message: "Employee Doesn't Exist",
        })
    }


})

app.post("/employees", (req, res) => {
    const data = req.body;

    if (!data.name || !data.email || !data.employeeID || !data.department || !data.Salary) {
        return res.status(500).json({
            message: "One of the parameters is missing"
        })
    }

    data.id = employeeList.length + 1;

    employeeList.push(data);

    return res.status(201).json({
        message: "Succesfully created new data",
        data: employeeList
    })

})

app.put("/employees/:employeeID", (req, res) => {
    const employeeID = req.params.employeeID;
    const postToUpdate = req.body;

    if (!postToUpdate.id || !postToUpdate.name || !postToUpdate.email || !postToUpdate.department || !postToUpdate.Salary) {
        return res.status(500).json({
            message: "One of the parameters is missing"
        })
    }


    employeeList = employeeList.map((post) => {
        if (post.employeeID == employeeID) {
            post = postToUpdate;
        }
        return post;
    })

    return res.status(200).json({
        message: "Succesfully updated the article",
        data: employeeList
    })
})


app.delete("/employees/:employeeID", (req, res) => {

    const employeeID = req.params.employeeID;

    const index = employeeList.findIndex((employeeList) => {
        if (employeeList.employeeID == employeeID) {
            return true;
        }
    })

    if (index !== -1) {
        employeeList.splice(index, 1);

        return res.status(200).json({
            message: "Succesfully deleted the article",
            data: employeeList
        })

    } else {
        return res.status(404).json({
            message: "Element you are trying to delete doesn't exist"
        })
    }

})






app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})