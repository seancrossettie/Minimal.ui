import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "./helpers/apiKeys";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App.js";
import { ChakraProvider } from "@chakra-ui/react";

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);