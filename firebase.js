// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASNQur47zmqqW8c4LbnUToBM4yFVqY0vY",
  authDomain: "task-tracker-6e432.firebaseapp.com",
  databaseURL: "https://task-tracker-6e432-default-rtdb.firebaseio.com",
  projectId: "task-tracker-6e432",
  storageBucket: "task-tracker-6e432.appspot.com",
  messagingSenderId: "382070399170",
  appId: "1:382070399170:web:68b20c736d27f6b9d3db5b",
  measurementId: "G-HDWHC09CM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getDatabase(app)
export const auth=getAuth()
