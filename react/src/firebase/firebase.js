import * as firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyB2S2ne_P-vLC-DNukBh1oOgEy6ZwZcBbo",
    authDomain: "auth-4bdb0.firebaseapp.com",
    databaseURL: "https://auth-4bdb0.firebaseio.com",
    projectId: "auth-4bdb0",
    storageBucket: "",
    messagingSenderId: "878693111863"
  };
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const db = firebase.database();
const auth = firebase.auth();

export {
    db,
    auth,
};