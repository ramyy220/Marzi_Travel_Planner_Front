import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDygG731wC9iJseokDTT2hphFZyDmrjJgc",
  authDomain: "travelplanner-867c8.firebaseapp.com",
  projectId: "travelplanner-867c8",
  storageBucket: "travelplanner-867c8.appspot.com",
  messagingSenderId: "619705355870",
  appId: "1:619705355870:web:fcffee62437a92e81deecf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };