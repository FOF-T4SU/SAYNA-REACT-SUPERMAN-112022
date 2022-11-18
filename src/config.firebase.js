// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: PROCESS.ENV.REACT_APP_FIREBASE_API_KEY,
  authDomain: PROCESS.ENV.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: PROCESS.ENV.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: PROCESS.ENV.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: PROCESS.ENV.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: PROCESS.ENV.REACT_APP_FIREBASE_APP_ID,
  measurementId: PROCESS.ENV.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

export const auth = app.auth();

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
