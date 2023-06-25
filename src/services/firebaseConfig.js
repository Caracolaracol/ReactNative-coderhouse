import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import {getFirestore } from 'firebase/firestore'
import { getDatabase } from "firebase/database";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAB-ffojTrE5wMQ0yWMiacBrBs0RVtYICM",
    authDomain: "torchnd-f03db.firebaseapp.com",
    databaseURL: "https://torchnd-f03db-default-rtdb.firebaseio.com",

    projectId: "torchnd-f03db",
    storageBucket: "torchnd-f03db.appspot.com",
    messagingSenderId: "239580804647",
    appId: "1:239580804647:web:d5797fd75ca87696b4c002"
};
export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)
export const DB_TORCHND = getDatabase(FIREBASE_APP)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
