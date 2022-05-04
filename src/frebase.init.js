// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQFCtYMpsoe9tMNthhh0r2rns-WUzhYmA",
    authDomain: "assignment-project-11.firebaseapp.com",
    projectId: "assignment-project-11",
    storageBucket: "assignment-project-11.appspot.com",
    messagingSenderId: "935265746919",
    appId: "1:935265746919:web:72eae8793c091e1dc54742"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;