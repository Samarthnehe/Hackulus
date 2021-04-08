import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDb1WSCu6pM1Hds0vxd_C-pe1TGRJdTM2c",
    authDomain: "hackulus-6d620.firebaseapp.com",
    projectId: "hackulus-6d620",
    storageBucket: "hackulus-6d620.appspot.com",
    messagingSenderId: "1079509389835",
    appId: "1:1079509389835:web:f69ca70f4d810dc7c06d0e",
    measurementId: "G-EWVD6C0SX8"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig); 

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};