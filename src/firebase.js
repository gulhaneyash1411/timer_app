import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoDZdmlqPmq3oAtERT1AYXGkEHKpiPsMQ",
  authDomain: "timer-app-7db6d.firebaseapp.com",
  projectId: "timer-app-7db6d",
  storageBucket: "timer-app-7db6d.appspot.com",
  messagingSenderId: "446808201426",
  appId: "1:446808201426:web:47db17de43568e8496f50b",
  measurementId: "G-YGR46R9T2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
