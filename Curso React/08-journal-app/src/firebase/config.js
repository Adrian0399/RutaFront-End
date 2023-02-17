// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5W51F4jMSaNMWtnAVoF8DSgYS2P5ekKc",
  authDomain: "react-curso-login.firebaseapp.com",
  projectId: "react-curso-login",
  storageBucket: "react-curso-login.appspot.com",
  messagingSenderId: "45508975255",
  appId: "1:45508975255:web:bb8790231ca731c0bfe7d2"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );