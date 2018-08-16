
let username = [];
let password = [];

var query = firebase.database().ref().orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      var key = childSnapshot.key;
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();
      username.push(childData.USERNAME);
      password.push(childData.PASSWORD);
  });
});



let currentUserName = [];
function save(){
    event.preventDefault();
    let isAlreadyInserted = false;
    //loop through your username array to check
        for (let i = 0; i < username.length; i++) {
            if (username[i] === document.getElementById("username").value) {
                isAlreadyInserted = true;
            }
        }

        //if the username is not in the array, insert it
        if (!isAlreadyInserted) {
          // console.log("test")
            username.push(document.getElementById("username").value);
        }
}
document.getElementById("login").addEventListener("click", save);

// let currentPasword = [];
function savePass(){
    event.preventDefault();
    let alreadyInserted = false;
    //loop through your username array to check
        for (let i = 0; i < password.length; i++) {
            if (password[i] === document.getElementById("pass").value) {
                alreadyInserted = true;
            }
        }

        //if the username is not in the array, insert it
        if (!alreadyInserted) {
          // console.log("test")
            password.push(document.getElementById("pass").value);
        }
}
document.getElementById("signup").addEventListener("click", () => {window.location.href = "signUp.html"});


document.getElementById("login").addEventListener("click", function() {
     if (username.indexOf( document.getElementById("username").value) == password.indexOf(document.getElementById("pass").value)){
     window.location.href = "index.html"; 
        console.log('password is right');
    } else{
      alert("Incorrect username or password");
    }
})
