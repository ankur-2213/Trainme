// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIZa3BoTZEO1X6Sb-p0s0GXj9-YWENCAw",
  authDomain: "trainme-5aca4.firebaseapp.com",
  projectId: "trainme-5aca4",
  storageBucket: "trainme-5aca4.firebasestorage.app",
  messagingSenderId: "838046529748",
  appId: "1:838046529748:web:15e5c7b9072ac59878a341",
  measurementId: "G-0HVSG8VLL3",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
