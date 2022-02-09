// Import the functions you need from the SDKs you need
import * as firebase from 'firebase'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo-Ob6J4DWL0Fcj98m-C_0WMTyBG7GZlg",
  authDomain: "photowall-65396.firebaseapp.com",
  databaseURL: "https://photowall-65396-default-rtdb.firebaseio.com",
  projectId: "photowall-65396",
  storageBucket: "photowall-65396.appspot.com",
  messagingSenderId: "886620182653",
  appId: "1:886620182653:web:5c72a4ca485c00142c3914",
  measurementId: "G-FM9VWQ368F"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const database = firebase.database; //using this cosnt to update our database in our console at firebase
export {database}