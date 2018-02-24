import firebase from 'firebase'
// Initialize Firebase
var config = {
apiKey: "AIzaSyA0Po0zGW_PhQrrQ4TAgfjA6c7x75MyatY",
authDomain: "blossom-mobile.firebaseapp.com",
databaseURL: "https://blossom-mobile.firebaseio.com",
projectId: "blossom-mobile",
storageBucket: "blossom-mobile.appspot.com",
messagingSenderId: "259425460375"
};
export default firebase.initializeApp(config);
