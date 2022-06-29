// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-ZUJz2VrHphdbcPf0ECgx7Zlkxf_dM1s",
    authDomain: "fintech-f56cd.firebaseapp.com",
    projectId: "fintech-f56cd",
    storageBucket: "fintech-f56cd.appspot.com",
    messagingSenderId: "43018216851",
    appId: "1:43018216851:web:b47674a2d8eb4b69897466"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;