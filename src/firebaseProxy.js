// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const proxyConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_PROXY_API_KEY,
  projectId: process.env.REACT_APP_FIREBASE_PROXY_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_PROXY_STORAGE_BUCKET,
  appId: process.env.REACT_APP_FIREBASE_PROXY_APP_ID,
}

// Initialize Firebase app instance
const proxy = initializeApp(proxyConfig, "proxy");


export { proxy };