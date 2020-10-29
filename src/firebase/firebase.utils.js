import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB5wjfJnM3TsjJRc3TjgRgLQObH7LkKowQ",
    authDomain: "ecommerce-clothing-c0846.firebaseapp.com",
    databaseURL: "https://ecommerce-clothing-c0846.firebaseio.com",
    projectId: "ecommerce-clothing-c0846",
    storageBucket: "ecommerce-clothing-c0846.appspot.com",
    messagingSenderId: "894557631683",
    appId: "1:894557631683:web:ba5b4bdaf60445b2f61e76",
    measurementId: "G-Z93FZP8PES"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;