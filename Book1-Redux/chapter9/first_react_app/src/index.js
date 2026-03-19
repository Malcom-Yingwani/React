import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCPtk44pNFhoOQvW6HGBfXPLOGQPlBSmOA",
  authDomain: "user-manager-app-68d21.firebaseapp.com",
  projectId: "user-manager-app-68d21",
  storageBucket: "user-manager-app-68d21.firebasestorage.app",
  messagingSenderId: "834219656094",
  appId: "1:834219656094:web:945054dc1eb5a2deeb0c8f",
  measurementId: "G-H4F7GPXM9T",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
