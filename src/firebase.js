import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyAOgtw5kzpgh5FZMHhs3LHRfHM1oW_Cjj4",
    authDomain: "silkroadintl-a68cc.firebaseapp.com",
    databaseURL: "https://silkroadintl-a68cc.firebaseio.com",
    projectId: "silkroadintl-a68cc",
    storageBucket: "silkroadintl-a68cc.appspot.com",
    messagingSenderId: "323921877117"
};
firebase.initializeApp(config);
export default firebase;