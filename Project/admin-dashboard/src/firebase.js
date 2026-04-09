import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "admin-dashboard-59606.firebaseapp.com",
  projectId: "admin-dashboard-59606",
  storageBucket: "admin-dashboard-59606.firebasestorage.app",
  messagingSenderId: "450556168053",
  appId: "1:450556168053:web:187c5c8a02374ee289f53c",
};

console.log("API KEY:", process.env.REACT_APP_FIREBASE_KEY);
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
