// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-450a8.firebaseapp.com",
  projectId: "mern-auth-450a8",
  storageBucket: "mern-auth-450a8.appspot.com",
  messagingSenderId: "661467543129",
  appId: "1:661467543129:web:0f70034b8c1993b799a348"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);