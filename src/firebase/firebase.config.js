// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VIET_apiKey,
  authDomain: process.env.VIET_authDomain,
  projectId: process.env.VIET_projectId,
  storageBucket: process.env.VIET_storageBucket,
  messagingSenderId: process.env.VIET_messagingSenderId,
  appId: process.env.VIET_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);