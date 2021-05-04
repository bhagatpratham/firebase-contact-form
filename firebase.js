// import firebase from "firebase";

// // Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyBGQoLuTALPx9XFf5TRLbAxm-2Kg8yBj4A",
//   authDomain: "react-contact-form-6af7f.firebaseapp.com",
//   projectId: "react-contact-form-6af7f",
//   storageBucket: "react-contact-form-6af7f.appspot.com",
//   messagingSenderId: "744385829277",
//   appId: "1:744385829277:web:02cd23f3263223240c3774",
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// var database = firebaseConfig.firestore();

// export default { database };

import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your firebase credentials
  apiKey: "AIzaSyBGQoLuTALPx9XFf5TRLbAxm-2Kg8yBj4A",
  authDomain: "react-contact-form-6af7f.firebaseapp.com",
  projectId: "react-contact-form-6af7f",
  storageBucket: "react-contact-form-6af7f.appspot.com",
  messagingSenderId: "744385829277",
  appId: "1:744385829277:web:02cd23f3263223240c3774",
});

var db = firebaseApp.firestore();

export { db };
