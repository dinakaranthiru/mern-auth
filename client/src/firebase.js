// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-49b35.firebaseapp.com",
  projectId: "mern-auth-49b35",
  storageBucket: "mern-auth-49b35.appspot.com",
  messagingSenderId: "998220017054",
  appId: "1:998220017054:web:894380e6cef489fe03ba8f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);