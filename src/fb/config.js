import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDjCxKEEAt-nBam4KAaE3dceqnV5yurqAo",
  authDomain: "gallery-618aa.firebaseapp.com",
  databaseURL: "https://gallery-618aa.firebaseio.com",
  projectId: "gallery-618aa",
  storageBucket: "gallery-618aa.appspot.com",
  messagingSenderId: "237049680960",
  appId: "1:237049680960:web:17ad9be38145ceddec3ba5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
