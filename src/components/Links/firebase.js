import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDj9RNxuKxqCGsFkwfNee37Rdv7GeA5T_I",
  authDomain: "react-crud-ed2ab.firebaseapp.com",
  databaseURL: "https://react-crud-ed2ab.firebaseio.com",
  projectId: "react-crud-ed2ab",
  storageBucket: "react-crud-ed2ab.appspot.com",
  messagingSenderId: "335121712823",
  appId: "1:335121712823:web:d72d6783ac7e9cb8abef32",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
