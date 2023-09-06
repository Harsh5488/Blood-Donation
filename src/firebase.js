import  { initializeApp  } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCfO2KzGP3x3aBY8r9DvrJsAOAQcGuupSU",
    authDomain: "blood-donation-d636b.firebaseapp.com",
    projectId: "blood-donation-d636b",
    storageBucket: "blood-donation-d636b.appspot.com",
    messagingSenderId: "319125758686",
    appId: "1:319125758686:web:c94adeba80416042db584f",
    measurementId: "G-WTXKN1G08K",
    databaseURL: "https://blood-donation-d636b-default-rtdb.firebaseio.com",
  };

export const app = initializeApp(firebaseConfig)  