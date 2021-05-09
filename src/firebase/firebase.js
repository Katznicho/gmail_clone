import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrYNy-vnujYDVhNLffEwpo60cv-3sLT-A",
    authDomain: "clone-a5ee7.firebaseapp.com",
    projectId: "clone-a5ee7",
    storageBucket: "clone-a5ee7.appspot.com",
    messagingSenderId: "1047701273638",
    appId: "1:1047701273638:web:b8b3cd309dfda613cffae7",
    measurementId: "G-H2CBRV14SJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {db, auth, provider};