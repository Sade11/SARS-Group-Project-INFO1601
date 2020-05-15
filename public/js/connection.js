// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "THE API KEY",
    authDomain: "PROJECTNAME.firebaseapp.com",
    databaseURL: "https://PROJECTNAME.firebaseio.com",
    projectId: "PROJECTNAME",
    storageBucket: "PROJECTNAME.appspot.com",
    messagingSenderId: "MESSAGE ID",
    appId: "APP ID",
    measurementId: "MEASUREMENT ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// make auth and firebase references
 const auth = firebase.auth();
 const db = firebase.firestore();
