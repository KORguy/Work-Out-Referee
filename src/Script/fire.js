import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCICJxcxJiAHFisZNdrfUduJUPBYRNakkA",
  authDomain: "login-ab57b.firebaseapp.com",
  databaseURL: "https://login-ab57b.firebaseio.com",
  projectId: "login-ab57b",
  storageBucket: "login-ab57b.appspot.com",
  messagingSenderId: "851186312290",
  appId: "1:851186312290:web:269d013b4a2506c699dd3b",
  measurementId: "G-LQ3EQKH9LP",
};

const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;
