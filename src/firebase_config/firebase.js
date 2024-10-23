import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCD8dLPJAe5OmPoNgkrevJYwJhpSv5efDQ",
  authDomain: "luni-ca8eb.firebaseapp.com",
  projectId: "luni-ca8eb",
  storageBucket: "luni-ca8eb.appspot.com",
  messagingSenderId: "315853974826",
  appId: "1:315853974826:web:d63c24932cea7e41058253",
  measurementId: "G-Z0512NL3YB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage }; 
