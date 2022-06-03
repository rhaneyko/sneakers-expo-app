import firebase  from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAtv_6eGOUAFkZ-OPEzeTfwVkZnc8PjmHk",
  authDomain: "sneakers-app-react-native-expo.firebaseapp.com",
  projectId: "sneakers-app-react-native-expo",
  storageBucket: "sneakers-app-react-native-expo.appspot.com",
  messagingSenderId: "340291106908",
  appId: "1:340291106908:web:0b79d02b650668ed174e99"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
