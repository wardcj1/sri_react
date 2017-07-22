import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC5NVKGsm6lXtN-KoLPPzhz2jlxFRiz8Hc",
    authDomain: "smartroboinvestments.firebaseapp.com",
    databaseURL: "https://smartroboinvestments.firebaseio.com",
    projectId: "smartroboinvestments",
    storageBucket: "smartroboinvestments.appspot.com",
    messagingSenderId: "78343951803"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
export default firebase;