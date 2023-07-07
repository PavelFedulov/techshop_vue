import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCxa_yPad5eBNiA3e7aCnsINeGajFBY0Gc",
    authDomain: "techshop-2f6c6.firebaseapp.com",
    projectId: "techshop-2f6c6",
    storageBucket: "techshop-2f6c6.appspot.com",
    messagingSenderId: "367245295272",
    appId: "1:367245295272:web:c62c1df32b48068f524c9d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}