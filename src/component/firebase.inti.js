// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQvWxDbN4_QlpoOAv-WVIrV7hLg-MJ3_0",
    authDomain: "personla-work-for-profile.firebaseapp.com",
    projectId: "personla-work-for-profile",
    storageBucket: "personla-work-for-profile.firebasestorage.app",
    messagingSenderId: "475617969915",
    appId: "1:475617969915:web:51724a6ff1fb05f43a925e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);