
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBJSvC97WgfgOvqnTTAGNV_r4MGTmo_ffI",
  authDomain: "tiktok---jornada-15c78.firebaseapp.com",
  projectId: "tiktok---jornada-15c78",
  storageBucket: "tiktok---jornada-15c78.appspot.com",
  messagingSenderId: "164039485620",
  appId: "1:164039485620:web:b1f6853dd977242e8a4fe1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;