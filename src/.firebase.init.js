// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc0qsYRfh7K4Xgti02GIs-dp5EHYOzjI4",
  authDomain: "smart-root-architect.firebaseapp.com",
  projectId: "smart-root-architect",
  storageBucket: "smart-root-architect.appspot.com",
  messagingSenderId: "584825393115",
  appId: "1:584825393115:web:3f95b956e7900157cca1fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;