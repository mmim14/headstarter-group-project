// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIpGeuuHCRJ6-yEpYbTUBB0Fi6N3oxBuM",
  authDomain: "auth-ad2f8.firebaseapp.com",
  projectId: "auth-ad2f8",
  storageBucket: "auth-ad2f8.appspot.com",
  messagingSenderId: "1022121177212",
  appId: "1:1022121177212:web:4e4683612c8071322919f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};