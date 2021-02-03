import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyBolZeifSDwx33UfNyyTWbgtKFsdVQjyq4",
    authDomain: "facebookclone-6cad7.firebaseapp.com",
    databaseURL: "https://facebookclone-6cad7.firebaseio.com",
    projectId: "facebookclone-6cad7",
    storageBucket: "facebookclone-6cad7.appspot.com",
    messagingSenderId: "978572585473",
    appId: "1:978572585473:web:f2a90bcb14a2e01e9fee00",
    measurementId: "G-8M7RZ4D8QJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;