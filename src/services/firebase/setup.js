// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore, collection } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import * as firebaseui from "firebaseui";

const firebaseConfig = {
  apiKey: "AIzaSyDRg5gHRdtqrdS-jOg58YSlK3E5wLeRbQo",
  authDomain: "fir-manager-ea0c4.firebaseapp.com",
  projectId: "fir-manager-ea0c4",
  storageBucket: "fir-manager-ea0c4.appspot.com",
  messagingSenderId: "57932109937",
  appId: "1:57932109937:web:1c2cddef9af325d90ee3d0",
  measurementId: "G-JPB1EEV68F"
};

const uiConfig = {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: '/',
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const colRef = collection(db, "manteinances");

// db.settings({
//     timestampsInSnapshots: true,
// });

export const startUi = (elementId) => {
    const ui = new firebaseui.auth.AuthUI(auth);
    ui.start(elementId, uiConfig);
}

