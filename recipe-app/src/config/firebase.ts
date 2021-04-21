import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import config from './config'

const firebaseApp = firebase.initializeApp(config.firebase)

export const Providers = {
  google: new firebase.auth.GoogleAuthProvider()
}


const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }