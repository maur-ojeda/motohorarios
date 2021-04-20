  import firebase from 'firebase'
  import 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyCxCAz-wWvewrYvIVJHWCnyUS2DhVyHlRM",
      authDomain: "motohorarios.firebaseapp.com",
      projectId: "motohorarios",
      storageBucket: "motohorarios.appspot.com",
      messagingSenderId: "714598539806",
      appId: "1:714598539806:web:08dd1aa40c10ead003440f"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();