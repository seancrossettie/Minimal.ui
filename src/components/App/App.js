import React from 'react'
import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getUserByFirebaseKey } from "../../helpers/data/userData";
import Router from "../../helpers/Router";
import NavBar from '../NavBar/NavBar';
import getUserCategories from '../../helpers/data/categoryData';

function App() {
  const [user, setUser] = useState(null);
  const [photoURL, setPhotoURL] = useState("");
  const [userCategories, setUserCategories] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        authed.getIdToken().then((token) => sessionStorage.setItem("token", token));
        getUserByFirebaseKey(authed.multiFactor.user.uid).then(response => { 
          setUser(response[0]);
          getUserCategories(response[0].userId).then(setUserCategories);
        });
        setPhotoURL(authed.photoURL);
      } else {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} photoURL={photoURL} />
      <Router 
        user={user} 
        setUser={setUser} 
        photoURL={photoURL} 
        userCategories={userCategories}
        setUserCategories={setUserCategories}
      />
    </div>
  );
}

export default App;
