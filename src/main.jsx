import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { ChakraProvider } from "@chakra-ui/react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgLH8AcPkTzgGOB2hWNw8WYit5DscSKGE",
  authDomain: "dscommerce-8a87a.firebaseapp.com",
  projectId: "dscommerce-8a87a",
  storageBucket: "dscommerce-8a87a.appspot.com",
  messagingSenderId: "94715432395",
  appId: "1:94715432395:web:242adba76594a747ca7a4e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);