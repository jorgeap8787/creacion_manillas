// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe2wG9h0pFiPg7HgmEkqh7ucKlm_r1eZE",
  authDomain: "creacionmanillas.firebaseapp.com",
  projectId: "creacionmanillas",
  storageBucket: "creacionmanillas.appspot.com",
  messagingSenderId: "575765302642",
  appId: "1:575765302642:web:1bb6844b58d94e66dbe1eb",
  measurementId: "G-GWNRFJ6PQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}

const analytics = getAnalytics(app);