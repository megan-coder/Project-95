
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyA2ohVrnJKxiV8_S2AdMvcSFYRiX7jS-KI",
      authDomain: "kwitter-563d8.firebaseapp.com",
      projectId: "kwitter-563d8",
      storageBucket: "kwitter-563d8.appspot.com",
      messagingSenderId: "181757069996",
      appId: "1:181757069996:web:008ec54c4e95645e6eed09"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
