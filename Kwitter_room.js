var firebaseConfig = {
  apiKey: "AIzaSyDWX0gUlRTBlfTKkDhP-cYazRnUj2hB1a8",
  authDomain: "p95v-da8ba.firebaseapp.com",
  databaseURL: "https://p95v-da8ba-default-rtdb.firebaseio.com",
  projectId: "p95v-da8ba",
  storageBucket: "p95v-da8ba.appspot.com",
  messagingSenderId: "1012788600364",
  appId: "1:1012788600364:web:d811b87d10a641f38fbb89",
  measurementId: "G-LQXVSW9182"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name")


  function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update(
          {
              purpose : "adding room name"
          }
      );
      localStorage.setItem("room_name", room_name);
      window.location = "Kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("room name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}

getData();


function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name); 
  window.location = "Kwitter_page.html";    
}
