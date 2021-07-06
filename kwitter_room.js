var firebaseConfig = {
        apiKey: "AIzaSyCKrBFDnVPp4zCtE2FRREjOr6Ni1ex4Hvk",
        authDomain: "let-s-chat-webapp-901aa.firebaseapp.com",
        databaseURL: "https://let-s-chat-webapp-901aa-default-rtdb.firebaseio.com",
        projectId: "let-s-chat-webapp-901aa",
        storageBucket: "let-s-chat-webapp-901aa.appspot.com",
        messagingSenderId: "329600528200",
        appId: "1:329600528200:web:58d3071d14690f429c8d7d",
        measurementId: "G-3501J6Q5H0"
      };
   
      firebase.initializeApp(firebaseConfig);

    
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

function add_room(){
      roomname=document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({purpose:"adding user"});
      localStorage.setItem("roomname",roomname);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
        function(snapshot) {document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
        console.log("roomname"+Room_names);

        row="<div class='roomname' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
  });});}
getData();

function redirectToRoomName(name){
        console.log(name);
        localStorage.setItem("roomname",roomname);
        window.location="kwitter_page.html";
}
function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("roomname");
        window.location="kwitter_page.html";

}