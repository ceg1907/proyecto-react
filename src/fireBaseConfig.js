import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDklcAlb5PuFP6Wg3m8NaJAI6GbEA3ulY0',
  authDomain: 'artstore-ecommerce.firebaseapp.com',
  projectId: 'artstore-ecommerce',
  storageBucket: 'artstore-ecommerce.appspot.com',
  messagingSenderId: '585941030587',
  appId: '1:585941030587:web:3cf9a821f8c1876d753b9e',
};

const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app);
