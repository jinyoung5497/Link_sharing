// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmtovUdgKoUf9X6qxvK4QpAm_qxj9_-84",
  authDomain: "fir-prac-5d0fb.firebaseapp.com",
  projectId: "fir-prac-5d0fb",
  storageBucket: "fir-prac-5d0fb.appspot.com",
  messagingSenderId: "50092664105",
  appId: "1:50092664105:web:bc8812a9a44988cf42c338",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
