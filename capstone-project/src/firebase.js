// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLXe9uXXHKQMmgAc66QIbsEKPsiYnj1uQ",
  authDomain: "capstone-d844e.firebaseapp.com",
  projectId: "capstone-d844e",
  storageBucket: "capstone-d844e.appspot.com",
  messagingSenderId: "950361359784",
  appId: "1:950361359784:web:267d4df8b1cfceda63099d",
  measurementId: "G-8FSM7JRLJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default {app, analytics};