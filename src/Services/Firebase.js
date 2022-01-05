import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyB5Jotzznxt9n5vmOTCZ0fX1HY2bWOgcb8",
    authDomain: "champ-166500.firebaseapp.com",
    databaseURL: "https://champ-166500.firebaseio.com",
    projectId: "champ-166500",
    storageBucket: "champ-166500.appspot.com",
    messagingSenderId: "160314753696",
    appId: "1:160314753696:web:1c827961984c424ff4ffc5"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore();