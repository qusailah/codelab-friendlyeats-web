// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCV3VmJRQFG86O5xGeH_sw80yNXJYC7UlU",
  authDomain: "friendlyeats-51579.firebaseapp.com",
  projectId: "friendlyeats-51579",
  storageBucket: "friendlyeats-51579.appspot.com",
  messagingSenderId: "706692858940",
  appId: "1:706692858940:web:12a1b818d68938337caf39"
};
const app = initializeApp(firebaseConfig);

// When deployed, there are quotes that need to be stripped
Object.keys(config).forEach((key) => {
  const configValue = config[key] + "";
  if (configValue.charAt(0) === '"') {
    config[key] = configValue.substring(1, configValue.length - 1);
  }
});

export const firebaseConfig = config;
