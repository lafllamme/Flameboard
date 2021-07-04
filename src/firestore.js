// web app's Firebase configuration
import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDbOKUFiHKtW3iCEmVHWhGczLo0tNRTbLI",
  authDomain: "flammeboard.firebaseapp.com",
  databaseURL:
    "https://flammeboard-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "flammeboard",
  storageBucket: "flammeboard.appspot.com",
  messagingSenderId: "508996318454",
  appId: "1:508996318454:web:b8ea4b3446ba4ff28d28d7",
  measurementId: "G-PCB0H92YG7",
};
// Initialize Firebase
const firestore = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export default { db, auth };



/* 

// collection references
const usersCollection = db.collection("users");
const postsCollection = db.collection("posts");
const commentsCollection = db.collection("comments");
const likesCollection = db.collection("likes");

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection,
};
 */
