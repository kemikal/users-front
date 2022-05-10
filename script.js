let userList = document.getElementById("userList");

const printUsers = () => {

    userList.innerHTML = "";

  fetch("http://localhost:3000/users")
.then(res => res.json())
.then(data => {
console.log(data);

    data.forEach(user => {
        let userItem = document.createElement("li");
        userItem.innerHTML = `${user.firstName} ${user.lastName}`;
        userList.appendChild(userItem);
    });

});  
}

printUsers();

document.getElementById("saveBtn").addEventListener("click", (e) => { 
    
        e.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    let user = {
        firstName: firstName,
        lastName: lastName
    };

    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        
        if (data.message == "success") {
            console.log("Det funkar, din nya användare fick userID: " + data.userId);
            printUsers();
        } else {
            console.log("DET FUNKAR EJ");
        }
    });
});


