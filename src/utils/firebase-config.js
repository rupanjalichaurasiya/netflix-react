// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAd2VUrJXo3GS275m15Z1QqcVY-tQdZTJg",
  authDomain: "netflix-project-4ce83.firebaseapp.com",
  projectId: "netflix-project-4ce83",
  storageBucket: "netflix-project-4ce83.appspot.com",
  messagingSenderId: "871546774266",
  appId: "1:871546774266:web:045349f5257ea4f46adf43",
  measurementId: "G-9T3YV5PJXG"
};


const app = initializeApp(firebaseConfig);
 export const firebaseAuth = getAuth(app);
