import React from 'react'
import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getUserByFirebaseKey } from "../../helpers/data/userData";
import Router from "../../helpers/Router";
import { NavBar } from '../NavBar/NavBar';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        authed.getIdToken().then((token) => sessionStorage.setItem("token", token));
        getUserByFirebaseKey(authed.multiFactor.user.uid).then(setUser);
      } else {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Router user={user} setUser={setUser} />
    </>
  );
}

export default App;
