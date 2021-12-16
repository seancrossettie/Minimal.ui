import React from 'react'
import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getUserByFirebaseKey } from "../../helpers/data/userData";
import Router from "../../helpers/Router";

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
    <div className="App">
      <Router user={user} setUser={setUser} />
    </div>
  );
}

export default App;
