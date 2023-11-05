import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB96AClx-llOZN1Lc1hTVzRdgVT7DVC4eI",
  authDomain: "vinylstore-coder.firebaseapp.com",
  projectId: "vinylstore-coder",
  storageBucket: "vinylstore-coder.appspot.com",
  messagingSenderId: "355003278294",
  appId: "1:355003278294:web:a03ae7c942e6467837ba77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
