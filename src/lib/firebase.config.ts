import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2oFpYAOsXfDDyuZjGlHGEP2rYJwa1Jtk",
  authDomain: "carefinder-bcfc4.firebaseapp.com",
  projectId: "carefinder-bcfc4",
  storageBucket: "carefinder-bcfc4.appspot.com",
  messagingSenderId: "71506850799",
  appId: "1:71506850799:web:afe6eb63086417a772fc1a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
