const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("psw");
const button = document.getElementById("makeaccount");
button.addEventListener("click",updateDB);

//Set database object here

const database = firebase.database().ref();
/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username        = usernameElement.value;
    const message         = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    console.log(username + " : " + message);

    //Update database here
    const data = {
        USERNAME: username,
        PASSWORD: message,
     }

     database.push(data);
     window.location.href = "signIn.html";

}


// Set database "child_added" event listener here

//     database.on("child_added",addMessage);

//     function addMessage(rowData){
//         const row = rowData.val();
//         const name = row.USERNAME;
//         const msg = row.MESSAGE;
//     //1. select the .allMessages div 
//       let messageDiv = document.getElementsByClassName("allMessages")[0];
//         //2. create new paragraph "p" element
//       let para = document.createElement('p');
//     //3. add to the new text "p"element
//       para.innerText = `${name}: ${msg}`
//     //4. append new "p" element to .allMessages div 
//       messageDiv.appendChild(para);
//     }