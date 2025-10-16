import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

const LoginPage = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleGoogleSignin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // console.log(result.user);
        setLoggedInUser(result.user);
      })
      .catch((error) => {
        // console.log(error);
        alert(error);
      });
  };

  const handleGoogleSignOff = () => {
    signOut(auth)
      .then(() => {
        alert("Signed off done");
        setLoggedInUser(null);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <h1>LOGIN PAGE</h1>

      {loggedInUser ? (
        <button onClick={handleGoogleSignOff}>Sign off</button>
      ) : (
        <button onClick={handleGoogleSignin}>Sign in with Google</button>
      )}

      <section>
        {loggedInUser && (
          <div>
            <h2>{loggedInUser?.displayName}</h2>
            <p>Email: {loggedInUser?.email}</p>
            <img src={loggedInUser?.photoURL} alt="User Image" />
          </div>
        )}
      </section>
    </div>
  );
};

export default LoginPage;
