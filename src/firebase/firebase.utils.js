// Import the functions you need from the SDKs you need
// Packages
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
 if(!userAuth) return; // if no user, return none

 const userRef = firestore.doc(`users/${userAuth.uid}`)
 const snapShot = await userRef.get()
 
 console.log("UserAuth ", userAuth)
 console.log("UserRef", userRef)
 console.log("Snapshot", snapShot)

 if (!snapShot.exists) {
    const {displayName, email, photoURL} = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        photoURL,
        ...additionalData
      })
    } catch(error) {
        console.log('Error creating user: ', error.message)
    }
  }
  return userRef
}

// exports
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider)
}

export default firebase