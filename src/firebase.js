import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyCiYxg9A3D0EnR-LlmydpmuXULLdNr47Fw",
    authDomain: "add-app-b5115.firebaseapp.com",
    projectId: "add-app-b5115",
    storageBucket: "add-app-b5115.appspot.com",
    messagingSenderId: "768803906995",
    appId: "1:768803906995:web:d22def50cfb09fd8b897c6",
    measurementId: "G-1MSZK4QKZJ"
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };