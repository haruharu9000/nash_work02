// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlnzrtTIuY5wvN1oZbuADFhLRPsYd9K6E",
    authDomain: "nash-work02.firebaseapp.com",
    projectId: "nash-work02",
    storageBucket: "nash-work02.appspot.com",
    messagingSenderId: "961981918897",
    appId: "1:961981918897:web:0676dab23e18e27e26bc90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init firebase
firebase.initializeApp(firebaseConfig) // バックエンドのfirebaseを初期化する

// init firestore service
const projectFirestore = firebase.firestore() // firebaseのサービスも初期化する
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.FieldValue.serverTimestamp //firebaseのtimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }