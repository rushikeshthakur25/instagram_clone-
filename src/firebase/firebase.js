import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCgQnowtTxLlCect3EsfTrCgJlFFS9McNY",
  authDomain: "insta-clone-rt.firebaseapp.com",
  projectId: "insta-clone-rt",
  storageBucket: "insta-clone-rt.appspot.com",
  messagingSenderId: "104635574110",
  appId: "1:104635574110:web:675e3958116d65dd49d1cf",
  measurementId: "G-MZTYL8T30F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);


export {app, auth, firestore, storage };
