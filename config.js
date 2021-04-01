import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCtorcqwchDq1rJXyfQtaVMJI31eigBU8w",
    authDomain: "projectbarter-569da.firebaseapp.com",
    projectId: "projectbarter-569da",
    storageBucket: "projectbarter-569da.appspot.com",
    messagingSenderId: "1074955032631",
    appId: "1:1074955032631:web:7c6405ffa851f7fea5c7b2",
    measurementId: "G-763ST8WF55"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
