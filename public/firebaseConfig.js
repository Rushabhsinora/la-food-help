// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "wastenot-b1c8a.firebaseapp.com",
  projectId: "wastenot-b1c8a",
  storageBucket: "wastenot-b1c8a.firebasestorage.app",
  messagingSenderId: "1074522660798",
  appId: "1:1074522660798:web:b66bb05756b0caed3f23ef",
  measurementId: "G-X0WWGJFCHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);