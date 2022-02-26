import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAbJLpjbnzy7qdpvl4u_VZgqMMTnWGM_gw",
    authDomain: "chatwave-2f41b.firebaseapp.com",
    projectId: "chatwave-2f41b",
    storageBucket: "chatwave-2f41b.appspot.com",
    messagingSenderId: "154868156288",
    appId: "1:154868156288:web:0bcb012669b2a3feca2365",
    databaseURL:"https://chatwave-2f41b-default-rtdb.firebaseio.com/"
  };

  firebase.initializeApp(config);

  export default firebase;