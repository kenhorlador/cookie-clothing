// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHi2PS9xGNHd74c7QRU3fEnFM9QZ4KZ7o",
  authDomain: "cookie-db-2b370.firebaseapp.com",
  projectId: "cookie-db-2b370",
  storageBucket: "cookie-db-2b370.appspot.com",
  messagingSenderId: "288481012221",
  appId: "1:288481012221:web:1772b805120accbd861194"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// exports
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider)
}

export default firebase