// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-6PbvCBk1hPDYW2tPLjLcAVn6eS_8eXk",
  authDomain: "netflixgpt-c1de1.firebaseapp.com",
  projectId: "netflixgpt-c1de1",
  storageBucket: "netflixgpt-c1de1.firebasestorage.app",
  messagingSenderId: "95924027118",
  appId: "1:95924027118:web:7b170b45bdf7c62671fdff",
  measurementId: "G-FJ9SKLYZE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Auth = getAuth();