// HealthNexus Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getFirestore, collection, getDocs, doc, setDoc, getDoc, updateDoc, query, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.ENV = window.ENV || {};

const E = window.ENV;
const isPlaceholder = (v) =>
  !v ||
  typeof v !== "string" ||
  v === "your-api-key-here" ||
  v.includes("your-project-id") ||
  v.includes("your-sender-id") ||
  v.includes("your-app-id");

export const firebaseReady =
  !isPlaceholder(E.FIREBASE_API_KEY) &&
  !isPlaceholder(E.FIREBASE_PROJECT_ID) &&
  !isPlaceholder(E.FIREBASE_APP_ID);

let app = null;
let db = null;
let auth = null;

if (firebaseReady) {
  const firebaseConfig = {
    apiKey: E.FIREBASE_API_KEY,
    authDomain: E.FIREBASE_AUTH_DOMAIN,
    projectId: E.FIREBASE_PROJECT_ID,
    storageBucket: E.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: E.FIREBASE_MESSAGING_SENDER_ID,
    appId: E.FIREBASE_APP_ID,
    measurementId: E.FIREBASE_MEASUREMENT_ID
  };

  app = initializeApp(firebaseConfig);
  try {
    if (firebaseConfig.measurementId && !isPlaceholder(firebaseConfig.measurementId)) {
      getAnalytics(app);
    }
  } catch (_) {
    /* Analytics optional */
  }
  db = getFirestore(app);
  auth = getAuth(app);
} else {
  console.warn(
    "HealthNexus: Firebase is not configured in env.js — using local browser demo auth and data."
  );
}

export { db, auth, collection, getDocs, doc, setDoc, getDoc, updateDoc, query, orderBy, signInWithEmailAndPassword, signOut, onAuthStateChanged, createUserWithEmailAndPassword };
