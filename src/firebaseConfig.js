// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkflLeOdoLbajp3LOwRVfBMXZDgmIwmBU",
  authDomain: "hotel-app-a2e47.firebaseapp.com",
  projectId: "hotel-app-a2e47",
  storageBucket: "hotel-app-a2e47.appspot.com",
  messagingSenderId: "63362870143",
  appId: "1:63362870143:web:bdcbcb4bc26f2d1521484a",
  measurementId: "G-DQN2STW4GS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize and export the Firebase Auth instance
export const auth = getAuth(app);

export default app;
