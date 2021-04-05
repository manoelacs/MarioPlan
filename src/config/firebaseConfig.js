 import firebase from 'firebase/app'; 
 import 'firebase/firestore';
 import 'firebase/auth';

 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAzy0sqmDM4wvReMf_bAQTyK6039hFvbn8",
    authDomain: "marioplan-ab0f1.firebaseapp.com",
    projectId: "marioplan-ab0f1",
    storageBucket: "marioplan-ab0f1.appspot.com",
    messagingSenderId: "416616916797",
    appId: "1:416616916797:web:240b3343638815c8d8c754"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ tomestampsInSnapshots: true});

  export default firebase;