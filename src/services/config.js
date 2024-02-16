import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASSE_CONFIG,
  // en la vida real el archivo .env va oculto con git ignore
  authDomain: "bahigh-93748.firebaseapp.com",
  projectId: "bahigh-93748",
  storageBucket: "bahigh-93748.appspot.com",
  messagingSenderId: "785592345366",
  appId: "1:785592345366:web:aaadc7700574b418e7a637",
  measurementId: "G-MGD6GP3Z8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

