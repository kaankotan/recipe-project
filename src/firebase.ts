import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey : 'AIzaSyAE94xdKdKQV3f2a-f4nfq_-MlzOJh5r58' ,
    authDomain: 'recipe-development-f80de.firebaseapp.com',
    projectId: 'recipe-development-f80de',
    storageBucket: 'recipe-development-f80de.appspot.com',
    messagingSenderId: '500624462924',
    appId: '500624462924:web:0f7111601ce7a7305c10e9',
    measurementId: 'G-40RMTL0EKQ',
})

export const auth = app.auth();
export default app;