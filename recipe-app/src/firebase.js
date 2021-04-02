import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyB4JE7yZ2XzKD0pE8CwM6CAZ4XOMT0dryE",
    authDomain: "recipe-app-d9936.firebaseapp.com",
    projectId: "recipe-app-d9936",
    storageBucket: "recipe-app-d9936.appspot.com",
    messagingSenderId: "681359373716",
    appId: "1:681359373716:web:e2aa92efd47ccc45facb81",
    measurementId: "G-9FXZJ9TKR5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db, auth}