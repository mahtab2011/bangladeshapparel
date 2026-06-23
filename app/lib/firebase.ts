import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0UH_Tdh9TjZPAL1LScRctBZMHHSoJZuQ",
  authDomain: "bangladesh-apparel.firebaseapp.com",
  projectId: "bangladesh-apparel",
  storageBucket: "bangladesh-apparel.firebasestorage.app",
  messagingSenderId: "118848206016",
  appId: "1:118848206016:web:87a8c6858532be247ca925"
};

const app = getApps().length === 0
  ? initializeApp(firebaseConfig)
  : getApps()[0];

export const db = getFirestore(app);