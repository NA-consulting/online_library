// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDeT6Kov7vZWvd3dL7tCX_wOVfeyO9APFI",
  authDomain: "librairie-en-ligne-6404e.firebaseapp.com",
  projectId: "librairie-en-ligne-6404e",
  storageBucket: "librairie-en-ligne-6404e.appspot.com",
  messagingSenderId: "970234507733",
  appId: "1:970234507733:web:b778522bb469ff593d0d5c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
