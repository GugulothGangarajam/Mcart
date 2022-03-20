import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD_eMW46M540ByPt519HHVRhdB3YM57dZc",
  authDomain: "mcart-21967.firebaseapp.com",
  projectId: "mcart-21967",
  storageBucket: "mcart-21967.appspot.com",
  messagingSenderId: "629585688009",
  appId: "1:629585688009:web:ac3f9b243ad6ddfc342418",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //initalizing the app and connecting the frontend with backend
const db = firebaseApp.firestore(); //realtime db
const auth = firebase.auth(); //for login or signin
const googleProvider = new firebase.auth.GoogleAuthProvider(); //signin into the app using multiple authentications providers
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
export default db;
