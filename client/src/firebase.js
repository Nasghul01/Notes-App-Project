
import { getFirestore, collection} from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6UC6tbT6Rf3agEeUW0kPbBwiMrtA_0RM",
  authDomain: "notes-app-a9da6.firebaseapp.com",
  projectId: "notes-app-a9da6",
  storageBucket: "notes-app-a9da6.appspot.com",
  messagingSenderId: "844430011461",
  appId: "1:844430011461:web:1bc6d6745d8e32ad3cc72c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")