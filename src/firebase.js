import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBkD-7UEaF2k4vRAejWY9ky5KoIGzy_4Ok",
  authDomain: "devideo-c0b02.firebaseapp.com",
  databaseURL: "https://devideo-c0b02-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "devideo-c0b02",
  storageBucket: "devideo-c0b02.appspot.com",
  messagingSenderId: "770318692950",
  appId: "1:770318692950:web:c153ab2250226a2a1381f7",
  measurementId: "G-WDR3Q4ZNV1"
}

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
