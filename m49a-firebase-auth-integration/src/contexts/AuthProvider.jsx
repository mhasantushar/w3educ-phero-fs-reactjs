import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import fbaseAuth from "../firebase/firebase.init";
import AuthContext from "./AuthContext";

const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  // this state handels the void status while the page reloads
  // during reloads, page forgets everything and query firebase server
  // but we need a way to remember the current user until fresh data comes from firebase
  const [authLoading, setAuthLoading]=useState(true);

  const createUserAccount = (userMail, userPass) => {
    // console.log (userMail, userPass);
    setAuthLoading(true);
    return createUserWithEmailAndPassword(fbaseAuth, userMail, userPass);
  };

  const signinUserAccount = (userMail, userPass) => {
    // console.log (userMail, userPass);
    setAuthLoading(true);
    return signInWithEmailAndPassword(fbaseAuth, userMail, userPass);
  };

  const signinGoogleAccount = () => {
    setAuthLoading(true);
    return signInWithPopup(fbaseAuth, googleAuthProvider);
  }

  const signOutUserAccount = () => {
    setAuthLoading(true);
    return signOut(fbaseAuth);
  }

  // this is an observer function to keep an eye on the logged in user..
  // onAuthStateChanged(fbaseAuth, (currentUser) => {
  //   if (currentUser) {
  //     console.log(currentUser);
  //   } else {
  //     console.log("Please log in");
  //   }
  // });

  // implemeting above onAuthStateChanged function with useEffect to avoid memory lick
  // using useEffect ensures to call the function for once, not everytime this page renders
  // so it runs onces while the page mounts + it also clean up auto when the page unmounts
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(fbaseAuth, (currentUser) => {
      // console.log(currentUser);
      setLoggedInUser(currentUser);
      setAuthLoading(false);
    });

    //clearing the observer function on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    authLoading,
    loggedInUser,
    // createUserAccount: createUserAccount  // next line is a shortcut of this
    createUserAccount,
    signinUserAccount,
    signOutUserAccount,

    signinGoogleAccount,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
