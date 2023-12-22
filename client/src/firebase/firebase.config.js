// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQvbXR-OG9MYULFleiPmaz7NgwPFOUwpc",
  authDomain: "mern-book-inventory-c9999.firebaseapp.com",
  projectId: "mern-book-inventory-c9999",
  storageBucket: "mern-book-inventory-c9999.appspot.com",
  messagingSenderId: "694558603121",
  appId: "1:694558603121:web:c3119a40e2d2556ab8e8d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;