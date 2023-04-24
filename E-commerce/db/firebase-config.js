import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAQPQnU-kFnnVbmFke_v1JuwGudQvwKeIU",
    authDomain: "e-commerce-1dd84.firebaseapp.com",
    projectId: "e-commerce-1dd84",
    storageBucket: "e-commerce-1dd84.appspot.com",
    messagingSenderId: "516794261993",
    appId: "1:516794261993:web:d485712fc60fefe4216b78",
    measurementId: "G-PCZLWQVECW"
};


const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;