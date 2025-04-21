'use client';

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDcHkX4FAXLJ2EkglZG1RR32hazGGDgWw8",
  authDomain: "waywiseai.firebaseapp.com",
  projectId: "waywiseai",
  storageBucket: "waywiseai.firebasestorage.app",
  messagingSenderId: "474025633534",
  appId: "1:474025633534:web:b407a770b024b48dda27af",
  measurementId: "G-W3MV0JGVEB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      console.log("User signed in:", user);
      return user;
    })
    .catch((error) => {
      console.error("Sign-in error:", error);
      throw error;
    });
};
