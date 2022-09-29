let userList = [];

function submitForm() {

    let data = {
        name: "",
        email: "",
        studentID:""
    }

    // Saving new form submit data
     userList.push(data);

    // data1 = document.querySelector('#name').value ;
    // userList.push(data1);
    // data2 = document.querySelector('#email').value;
    // userList.push(data2);
    // data3= document.querySelector('#ID').value;
    // userList.push(data3);



    localStorage.setItem("userList", JSON.stringify(userList));

}

// You can get the userlist using

let updatedUserList = JSON.parse(localStorage.getItem("userList"));

console.log(updatedUserList)

for (let i = 0; i < updatedUserList.length; i++) {

    document.getElementById.apply('#x').innerHTML = "bojour";    

}
