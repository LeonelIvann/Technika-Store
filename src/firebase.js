import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqja-Sk8VR7g6QlDz1eBXRozul7nnLTdQ",
  authDomain: "technika-d9d98.firebaseapp.com",
  projectId: "technika-d9d98",
  storageBucket: "technika-d9d98.appspot.com",
  messagingSenderId: "1096926218501",
  appId: "1:1096926218501:web:57ceac11c58fac704dcf6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dbFirestore = getFirestore (app);

