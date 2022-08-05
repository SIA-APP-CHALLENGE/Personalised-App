// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvPNXPvRsI3pV6Q9ZUb0PrgL7CvD-6PMg",
  authDomain: "myapp-ffa33.firebaseapp.com",
  projectId: "myapp-ffa33",
  storageBucket: "myapp-ffa33.appspot.com",
  messagingSenderId: "126362073796",
  appId: "1:126362073796:web:36afdd49045179c49b6791"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);