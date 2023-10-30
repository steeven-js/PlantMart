// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDP0DTKpFS9KD-5YlhjRArS-DOcdwsVjhk",
    authDomain: "plantjsprod.firebaseapp.com",
    projectId: "plantjsprod",
    storageBucket: "plantjsprod.appspot.com",
    messagingSenderId: "743439045330",
    appId: "1:743439045330:web:83ab2d4f1e51c9623ad30b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;