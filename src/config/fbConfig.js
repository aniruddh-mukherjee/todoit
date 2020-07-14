import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export const firebaseConfig = {
    apiKey: "AIzaSyAGTUErvHBGFrqRox3m4N2uuUTVg69xHR8",
    authDomain: "marioplan-83641.firebaseapp.com",
    databaseURL: "https://marioplan-83641.firebaseio.com",
    projectId: "marioplan-83641",
    storageBucket: "marioplan-83641.appspot.com",
    messagingSenderId: "601321041898",
    appId: "1:601321041898:web:3ef16f30a214850ff84c93",
    measurementId: "G-N11R0H8V87"
  };

  firebase.initializeApp(firebaseConfig)
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase

  