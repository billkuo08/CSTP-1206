let userList = [];


function submitForm() {
    let newRow = document.createElement("tr","td");
    let newCell = document.createElement("td")
    const mq = window.matchMedia("(max-width: 500px)")


    let data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        studentId: document.getElementById("ID").value,
    }

    // Saving new form submit data
    userList.push(data);
    localStorage.setItem("userList", JSON.stringify(userList));
    // You can get the userlist using
    let updatedUserList = JSON.parse(localStorage.getItem("userList"));

    for (let i = 0; i < userList.length; i++) {
        newCell.style.fontSize = "24px";
        newCell.innerHTML = 
        `<pre>${updatedUserList[i].name}&emsp;${updatedUserList[i].email}&emsp;${updatedUserList[i].studentId}</pre>`;
        if (mq.matches){
            newCell.style.fontSize = "12px";           
        }
    }

    newRow.append(newCell);
    document.getElementById("rows").appendChild(newRow);


}


