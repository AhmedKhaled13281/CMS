// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb5Kp1CkrEnknzJlWyPwIKt4QEX6yoPoI",
  authDomain: "content-management-syste-5da80.firebaseapp.com",
  projectId: "content-management-syste-5da80",
  storageBucket: "content-management-syste-5da80.appspot.com",
  messagingSenderId: "727863280392",
  appId: "1:727863280392:web:d522b3200e6102c11ca2bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// make the firebase storage
export const storage = getStorage(app);