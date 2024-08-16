
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth ,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDHliP1MBDk07HhKMDAcLZCwc5DRg9v_u8",
  authDomain: "sattar-project-01.firebaseapp.com",
  projectId: "sattar-project-01",
  storageBucket: "sattar-project-01.appspot.com",
  messagingSenderId: "1098863222328",
  appId: "1:1098863222328:web:f8c8d6f7c51438fcfb10cd",
  measurementId: "G-NZ09CR15LV"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth ,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut}