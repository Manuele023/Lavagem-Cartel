import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import { 
getFirestore 
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

import { 
getAuth 
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";


const firebaseConfig = {

  apiKey: "AIzaSyD7-5DJY3dGOiq71vgcpWJQgbWM9HOA2Ek",

  authDomain: "lavagem-cartel.firebaseapp.com",

  projectId: "lavagem-cartel",

  storageBucket: "lavagem-cartel.appspot.com",

  messagingSenderId: "35926730423",

  appId: "1:35926730423:web:2b7e72ee07fb76cd358f32"

};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);


export const auth = getAuth(app);
