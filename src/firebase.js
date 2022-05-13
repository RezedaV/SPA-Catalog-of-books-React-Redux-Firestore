import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAS1ZzE6RwHBw-gyndmU63PygLhxqVfau4",
    authDomain: "books-d40af.firebaseapp.com",
    projectId: "books-d40af",
    storageBucket: "books-d40af.appspot.com",
    messagingSenderId: "908928702623",
    appId: "1:908928702623:web:82afc8573b3b3a85a56aaa"
};

const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app);


