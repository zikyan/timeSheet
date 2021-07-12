import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCQ1WTOd7Vfc72z9fAz7bdooNa6Ne5gYM8",
    authDomain: "clocked-ad1c9.firebaseapp.com",
    projectId: "clocked-ad1c9",
    storageBucket: "clocked-ad1c9.appspot.com",
    messagingSenderId: "903685286469",
    appId: "1:903685286469:web:edb142c9667d921a33d12c",
    measurementId: "G-G55PT9EVXR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;