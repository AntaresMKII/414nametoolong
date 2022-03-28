import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, getdatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZik8dkYcllGwSfBzVl-zy8EI6IkJlhgM",
  authDomain: "nametoolong-53997.firebaseapp.com",
  databaseURL: "https://nametoolong-53997-default-rtdb.firebaseio.com",
  projectId: "nametoolong-53997",
  storageBucket: "nametoolong-53997.appspot.com",
  messagingSenderId: "568289968492",
  appId: "1:568289968492:web:656ac4712d1105fc9d3349",
  measurementId: "G-2JTPRC9EVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
