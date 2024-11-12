// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDbCmjnzRmImHlzZfBJasxsWvXc0zycM9g",
  authDomain: "auth-milon-mela-c0f14.firebaseapp.com",
  projectId: "auth-milon-mela-c0f14",
  storageBucket: "auth-milon-mela-c0f14.firebasestorage.app",
  messagingSenderId: "364573070378",
  appId: "1:364573070378:web:4946f512cca1dc3f175f53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
