import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUFNRmmUfk8YlC2Z-7PJC05n2s97Dt87s",
  authDomain: "filmfinder-310a7.firebaseapp.com",
  projectId: "filmfinder-310a7",
  storageBucket: "filmfinder-310a7.appspot.com",
  messagingSenderId: "789795643387",
  appId: "1:789795643387:web:4438ff0776a265e2e6755e",
  measurementId: "G-JHTCMMF7V3",
};

// Initialize Firebase
export const FireApp = initializeApp(firebaseConfig);
