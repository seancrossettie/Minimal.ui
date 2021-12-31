import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "./styles/index.css"
import firebaseConfig from "./helpers/apiKeys";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App.js";
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

firebase.initializeApp(firebaseConfig);

const theme = extendTheme({
  components: {
    Steps,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);