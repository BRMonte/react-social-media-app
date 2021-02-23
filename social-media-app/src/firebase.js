import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD8SrFesPHsD6APbfUhSUmZXAfpNIdlTJk",
    authDomain: "react-social-media-1a7c8.firebaseapp.com",
    projectId: "react-social-media-1a7c8",
    storageBucket: "react-social-media-1a7c8.appspot.com",
    messagingSenderId: "421657244350",
    appId: "1:421657244350:web:e82d05862743cd2f7ce4ef"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, storage };
