import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4uucsxSJRMYJN4GWacGObQhg6MOG2_Zs",
  authDomain: "cvsivu.firebaseapp.com",
  projectId: "cvsivu",
  storageBucket: "cvsivu.appspot.com",
  messagingSenderId: "206756839192",
  appId: "1:206756839192:web:3d3b695955f4b2ae34e86d",
  measurementId: "G-XT3KJ55BQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);