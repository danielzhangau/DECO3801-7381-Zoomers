import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB8R46ChpzQ5eyzOPs0YeX4QMpEtGxyCWc',
  authDomain: 'greenmiles-84f66.firebaseapp.com',
  databaseURL: 'https://greenmiles-84f66.firebaseio.com',
  projectId: 'greenmiles-84f66',
  storageBucket: 'greenmiles-84f66.appspot.com',
  messagingSenderId: '168896962577',
  appId: '1:168896962577:ios:f1a611797950b912d6d1b0',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };