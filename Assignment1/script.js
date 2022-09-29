let userList = [];

function submitForm() {

    let data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        studentID:document.getElementById("ID").value,
    }

    // Saving new form submit data
     userList.push(data);
    


    localStorage.setItem("userList", JSON.stringify(userList));

}

// You can get the userlist using

let updatedUserList = JSON.parse(localStorage.getItem("userList"));
console.log(updatedUserList)

for (let i = 0; i < updatedUserList.length; i++) {

    
}
