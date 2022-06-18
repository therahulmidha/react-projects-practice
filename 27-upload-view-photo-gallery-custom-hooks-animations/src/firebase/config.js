import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "react-max-course-4a914.firebaseapp.com",
  databaseURL: "https://react-max-course-4a914-default-rtdb.firebaseio.com",
  projectId: "react-max-course-4a914",
  storageBucket: "react-max-course-4a914.appspot.com",
  messagingSenderId: "874739100716",
  appId: "1:874739100716:web:da14ac19b021a36c607589"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
