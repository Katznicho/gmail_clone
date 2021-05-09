import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIvVFiPvKgapAcZelXkDLEXLS7J5vmtTY",
  authDomain: "fir-3d19e.firebaseapp.com",
  projectId: "fir-3d19e",
  storageBucket: "fir-3d19e.appspot.com",
  messagingSenderId: "275744072961",
  appId: "1:275744072961:web:5eba892fc8ceb136146700",
  measurementId: "G-FL597CKNHK"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {db, auth, provider};