import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCF2nWoK1ffN-PalexGv-aYjL85Jsh8Dow",
    authDomain: "snapchat-clone-8639d.firebaseapp.com",
    projectId: "snapchat-clone-8639d",
    storageBucket: "snapchat-clone-8639d.appspot.com",
    messagingSenderId: "730902807701",
    appId: "1:730902807701:web:9ef33d3db30a639ee2479c",
    measurementId: "G-28MWYWCZE1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, storage, provider };
