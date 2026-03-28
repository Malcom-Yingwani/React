// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxpuZ7L-RF9OOPe08Yzn1R8YvZSKDvFT4",
  authDomain: "todo-list-e9858.firebaseapp.com",
  projectId: "todo-list-e9858",
  storageBucket: "todo-list-e9858.firebasestorage.app",
  messagingSenderId: "430650788028",
  appId: "1:430650788028:web:469e9b4192bba0492768b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth();
