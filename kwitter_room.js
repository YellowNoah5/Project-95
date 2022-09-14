// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiNYzbP-WZ34NatiTySWMDLA4NV_QDJtc",
    authDomain: "quacker-b5cf5.firebaseapp.com",
    projectId: "quacker-b5cf5",
    storageBucket: "quacker-b5cf5.appspot.com",
    messagingSenderId: "38689050446",
    appId: "1:38689050446:web:f1f66ddb2c4fbd7fecd81f"
  };

  function addRoom()
  {
        Room_names = document.getElementById("room_name").value;
  
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });
  
              localStorage.setItem("room_name", room_name);
  
              window.location = "kwitter_page.html";
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log("Room Name - " + Room_names);
        row = "div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
        //End code
        });});}
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