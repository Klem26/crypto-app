// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDIwSLoDX_t4L3u-O0se7GQG5hDYis4Zvg',
  authDomain: 'crypto-app-v1.firebaseapp.com',
  projectId: 'crypto-app-v1',
  storageBucket: 'crypto-app-v1.appspot.com',
  messagingSenderId: '832513573797',
  appId: '1:832513573797:web:f58a401d1604bd7c0f5e4c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
