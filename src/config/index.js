import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB7wRvmO08twPS4_8Fmk6xfhZ7m6OrmGf4",
  authDomain: "ecommerce-60137.firebaseapp.com",
  projectId: "ecommerce-60137",
  storageBucket: "ecommerce-60137.appspot.com",
  messagingSenderId: "189618297258",
  appId: "1:189618297258:web:a167c1cedca5b7fe8473d3",
};
export const firebaseConfig = firebase.initializeApp(config);

export default firebase;
