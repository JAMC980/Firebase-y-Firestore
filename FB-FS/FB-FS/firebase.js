 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 import {getAuth } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js"
 import {getFirestore } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js"
 
 const firebaseConfig = {
  apiKey: "AIzaSyBtmcHsQBmEx9PMo-7UsJcZ58tcg-TEbwM",
  authDomain: "registro2-470ab.firebaseapp.com",
  projectId: "registro2-470ab",
  storageBucket: "registro2-470ab.appspot.com",
  messagingSenderId: "162097943852",
  appId: "1:162097943852:web:1fe5f3530a1b0b50da0889"
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
 export const db = getFirestore(app)