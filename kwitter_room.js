
var firebaseConfig = {
      apiKey: "AIzaSyBEP1T8H0xYSCCjDJEtV2lsdQiIUrYJR-E",
      authDomain: "donut-73c44.firebaseapp.com",
      databaseURL: "https://donut-73c44-default-rtdb.firebaseio.com",
      projectId: "donut-73c44",
      storageBucket: "donut-73c44.appspot.com",
      messagingSenderId: "1035750636141",
      appId: "1:1035750636141:web:9f1c20da6a79f6eafd5d64",
      measurementId: "G-YJQ2RZVW2G"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
function adduser(){
  user_name = document.getElementById("username").value;
  firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
  });
}

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
{ childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
