import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBl97nSjDHiO8whiSWRIZg2Taca4iaLddA',
  authDomain: 'caresync-48c9c.firebaseapp.com',
  projectId: 'caresync-48c9c',
  storageBucket: 'caresync-48c9c.appspot.com',
  messagingSenderId: '273061678462',
  appId: '1:273061678462:web:8d732e4b2bfa1da5d1772f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
