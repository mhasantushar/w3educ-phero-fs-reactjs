// IMPORTANT - SHOULD NOT MAKE THIS PUBLIC

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGbTtsNgE5erwZ5nhZn8t8opwVvBqMbFA",
  authDomain: "w3educ-phero.firebaseapp.com",
  projectId: "w3educ-phero",
  storageBucket: "w3educ-phero.firebasestorage.app",
  messagingSenderId: "146926840733",
  appId: "1:146926840733:web:ed660c412fd6185a9bdd74"
};

// Initialize Firebase
const googleApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(googleApp); 