import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import fbaseAuth from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
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
  const [pageIsLoading, setPageIsLoading] = useState(true);

  const doCreateUserWithEmailAndPassword = (vMail, vPass) => {
    // setPageIsLoading(true);
    return createUserWithEmailAndPassword(fbaseAuth, vMail, vPass);
  };

  const doSendEmailVerification = () => {
    // setPageIsLoading(true);
    return sendEmailVerification(fbaseAuth.currentUser);
  };

  const doUpdateProfile = (displayName, photoURL) => {
    // setPageIsLoading(true);
    // console.log(displayName, photoURL);
    return updateProfile(fbaseAuth.currentUser, {
      displayName,
      photoURL,
    });
  };

  const doSignInWithEmailAndPassword = (vMail, vPass) => {
    // setPageIsLoading(true);
    return signInWithEmailAndPassword(fbaseAuth, vMail, vPass);
  };

  const doSignInGoogleWithPopup = () => {
    // setPageIsLoading(true);
    return signInWithPopup(fbaseAuth, googleProvider);
  };

  const doSignInGitHubWithPopup = () => {
    // setPageIsLoading(true);
    return signInWithPopup(fbaseAuth, githubProvider);
  };

  const doSendPasswordResetEmail = (email) => {
    // setPageIsLoading(true);
    return sendPasswordResetEmail(fbaseAuth, email);
  };

  const doSignOut = () => {
    // setPageIsLoading(true);
    return signOut(fbaseAuth);
  };

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
    doSignOut,

    pageIsLoading,
    setPageIsLoading,
  };

  // saving auth info between page loads..
  useEffect(() => {
    //adding a listner..
    const unsubscribe = onAuthStateChanged(fbaseAuth, (savedUser) => {
       console.log(savedUser);
      setLoggedInUser(savedUser);
      setPageIsLoading(false);
    });

    // cleaning up the listener..
    return () => {
      unsubscribe;
    };
  }, []);

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
