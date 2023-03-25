import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADR864ITwxCfQ0ZNYuY5zipVKoVYDmo_Y",
  authDomain: "movie-app-9b0e3.firebaseapp.com",
  projectId: "movie-app-9b0e3",
  storageBucket: "movie-app-9b0e3.appspot.com",
  messagingSenderId: "572315590417",
  appId: "1:572315590417:web:e896a9abad8afb38c8f6b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { db, auth };
