// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEnst4wjUUr_kdGHT3H1XZCXKA-6n-S1Y",
  authDomain: "devdeck-9e8ab.firebaseapp.com",
  projectId: "devdeck-9e8ab",
  storageBucket: "devdeck-9e8ab.appspot.com",
  messagingSenderId: "356038768247",
  appId: "1:356038768247:web:08a8cbb4147056056b7872"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app)
export { auth, app, firestore, storage }