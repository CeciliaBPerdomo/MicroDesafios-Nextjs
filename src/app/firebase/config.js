// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp3z7zjp2dvhBjibLvpiypxosSqS2FvaM",
  authDomain: "e-capellari.firebaseapp.com",
  projectId: "e-capellari",
  storageBucket: "e-capellari.appspot.com",
  messagingSenderId: "186953727461",
  appId: "1:186953727461:web:bcad3051c2dbd40c72030c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)