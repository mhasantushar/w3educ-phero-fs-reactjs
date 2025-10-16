import React, { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

const LoginPage = () => {
  const [googleUser, setGoogleUser] = useState(null);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // // optional - Google Access Token, used to access Google API
        // const googleCredential = googleProvider.credentialFromResult(result);
        // const googleAccessToken = Credential.accessToken;
        const googleUser = result.user;
        // console.log(googleUser);
        setGoogleUser(googleUser);
      })
      .catch((error) => {
        const googleAuthErrorMessage = error.message;
        // const googleAuthErrorCode = error.code;
        // const googleAuthErrorEmail = error.customData.email;
        // const googleCredential = googleProvider.credentialFromResult(error);
        console.log(googleAuthErrorMessage);
      });
  };

  const handleGoogleSignOff = () => {
    signOut(auth)
      .then(() => {
        alert("Signning off completed");
        setGoogleUser(null);
      })
      .catch((error) => {
        alert(`Signning off failed due to ${error.message}`);
      });
  };

  return (
    <div>
      <hr />
      <h1>LOGIN</h1>
      <section className="my-12">
        <div className="flex justify-center gap-6">
          {/* <button onClick={handleGoogleSignIn}>Sign In Google</button>
          <button onClick={handleGoogleSignOff}>Sign Off Google</button> */}
          {
            googleUser ? <button onClick={handleGoogleSignOff}>Sign Off Google</button> : <button onClick={handleGoogleSignIn}>Sign In Google</button>
          }
        </div>

        {googleUser && (
          <div>
            <h3 className="mt-6 text-3xl">{googleUser?.displayName}</h3>
            <p>Email: {googleUser?.email}</p>
            <img className="mx-auto" src={googleUser.photoURL} alt="User Image" />
          </div>
        )}
      </section>

      <hr />
      <section className="my-12">
        <div className="flex justify-center gap-6">
          <button>Sign In Github</button>
          <button>Sign Off Github</button>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default LoginPage;
