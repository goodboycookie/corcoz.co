import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCdBmnGKGPRToxffaVI-WiZXqE95TgRdOw",
    authDomain: "corcozcobb.firebaseapp.com",
    projectId: "corcozcobb",
    storageBucket: "corcozcobb.appspot.com",
    messagingSenderId: "86460976689",
    appId: "1:86460976689:web:7134d2c39cd2d3fe9a0f10",
    measurementId: "G-0W0NJRMZQ9"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();