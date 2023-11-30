
import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';

//Aqui vocês devem colocar as suas credenciais
const firebaseConfig = {
  apiKey: "AIzaSyA71Hga14_XbvynVEBESUbsBk2QtAFOh-E",
  authDomain: "teste-c8312.firebaseapp.com",
  projectId: "teste-c8312",
  storageBucket: "teste-c8312.appspot.com",
  messagingSenderId: "298209595543",
  appId: "1:298209595543:web:1617127e489a5f484159d2",
  measurementId: "G-SRH9VCSV5D"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app)
const db = getFirestore(app);

export { app, auth, db }