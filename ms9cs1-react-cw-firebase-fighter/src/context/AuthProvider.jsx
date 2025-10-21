import React, { useState } from "react";
import AuthContext from "./AuthContext";
import fbaseAuth from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const doCreateUserWithEmailAndPassword = (vMail, vPass) => {
    return createUserWithEmailAndPassword(fbaseAuth, vMail, vPass);
  };

  const doSendEmailVerification = ()=>{
    return sendEmailVerification(fbaseAuth.currentUser);
  }

  const  doUpdateProfile = (displayName, photoURL) => {
     return updateProfile(fbaseAuth.currentUser, {
          displayName,
          photoURL
        })
  }

  const doSignInWithEmailAndPassword = (vMail, vPass) => {
    return signInWithEmailAndPassword(fbaseAuth, vMail, vPass);
  };

  const doSignInGoogleWithPopup = () => {
    return signInWithPopup(fbaseAuth, googleProvider);
  }

  const doSignInGitHubWithPopup = () =>{
    return signInWithPopup(fbaseAuth, githubProvider);
  }
  
  const doSendPasswordResetEmail = (email) => {
    return sendPasswordResetEmail(fbaseAuth, email);
  }

  const doSignOut = () => {
    return signOut(fbaseAuth);
  } 

  const authInfo = {
    loggedInUser,
    setLoggedInUser,

    doCreateUserWithEmailAndPassword,
    doSendEmailVerification,
    doUpdateProfile,

    doSignInWithEmailAndPassword,
    doSignInGoogleWithPopup,
    doSignInGitHubWithPopup,
    doSendPasswordResetEmail,
    doSignOut
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
