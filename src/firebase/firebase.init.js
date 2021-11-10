import firebaseConfig from "../firebase/firebase.config";
import { initializeApp } from "firebase/app";

const initializeFirebase = () => {
  initializeApp(firebaseConfig);
};

export default initializeFirebase;
