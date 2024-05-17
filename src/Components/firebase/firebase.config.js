// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0ULIQxAvI4mERJmpGbt2FebG7wc4Z-I0",
  authDomain: "xyz-fashion-house.firebaseapp.com",
  projectId: "xyz-fashion-house",
  storageBucket: "xyz-fashion-house.appspot.com",
  messagingSenderId: "586114238796",
  appId: "1:586114238796:web:5381cf79b2e78af00d67e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
export default auth;