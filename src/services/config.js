import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXL1F4p6jmeW41JPI4gl5k6esPLPa1IaM",
  authDomain: "bahigh-93748.firebaseapp.com",
  projectId: "bahigh-93748",
  storageBucket: "bahigh-93748.appspot.com",
  messagingSenderId: "785592345366",
  appId: "1:785592345366:web:aaadc7700574b418e7a637",
  measurementId: "G-MGD6GP3Z8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);

