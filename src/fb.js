import firebase from 'firebase/compat/app'

const firebaseConfig = {
  apiKey: "AIzaSyBvsLnXbW1K6lPFfQ_lmZDDKjxTMnVs8_A",
  authDomain: "todo-app-8bc99.firebaseapp.com",
  projectId: "todo-app-8bc99",
  storageBucket: "todo-app-8bc99.appspot.com",
  messagingSenderId: "563558460123",
  appId: "1:563558460123:web:8cd7e437f578137d3f3afe",
  measurementId: "G-DXZDT6Q4NR"
};

const db = firebase.initializeApp(firebaseConfig);
export default db;