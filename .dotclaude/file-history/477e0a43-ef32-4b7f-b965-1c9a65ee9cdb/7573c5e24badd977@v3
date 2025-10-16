import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getDatabase, Database } from 'firebase/database';

// Firebase configuration
// These are safe to expose in client-side code
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyDemoKey-ReplaceWithYourActualKey",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "halloween-candy-cart.firebaseapp.com",
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || "https://halloween-candy-cart-default-rtdb.firebaseio.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "halloween-candy-cart",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "halloween-candy-cart.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:123456789:web:abcdef123456"
};

let app: FirebaseApp | undefined;
let database: Database | undefined;

// Initialize Firebase only on client side
export const initializeFirebase = () => {
  if (typeof window === 'undefined') {
    return { app: undefined, database: undefined };
  }

  if (!app) {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    database = getDatabase(app);
  }

  return { app, database };
};

// Get database instance (lazy initialization)
export const getDB = () => {
  if (typeof window === 'undefined') {
    return undefined;
  }

  if (!database) {
    const { database: db } = initializeFirebase();
    return db;
  }

  return database;
};
