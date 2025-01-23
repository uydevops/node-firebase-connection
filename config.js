const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyCDfzhl2SHW7624v9OdGrDD08bBLwlB_hc",
    authDomain: "beautypos-bbf74.firebaseapp.com",
    projectId: "beautypos-bbf74",
    storageBucket: "beautypos-bbf74.firebasestorage.app",
    messagingSenderId: "414811183771",
    appId: "1:414811183771:web:5c5717586c55fdaf20043e",
    measurementId: "G-PLW9XB0WC9"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const Users = db.collection('User');

module.exports = Users;
