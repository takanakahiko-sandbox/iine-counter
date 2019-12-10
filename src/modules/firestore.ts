import firebase from 'firebase'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId
});

const firestore = firebaseApp.firestore()

export default firestore