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
  
  function add_user(){
      username=document.getElementById("user_name").value;
      firebase.database().ref("/").child(username).update({purpose:"adding user"});
      
  }