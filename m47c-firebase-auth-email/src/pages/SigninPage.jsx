import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link } from "react-router";
import auth from "../firebase/firebase.init";

const SigninPage = () => {
  const [signinError, setSigninError] = useState(null);
  const [signinSuccess, setSigninSuccess] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleUserSignIn = (event) => {
    event.preventDefault();
    const userMail = event.target.fmail.value;
    const userPass = event.target.fpass.value;

    setSigninSuccess(false);
    setSigninError(null);

    signInWithEmailAndPassword(auth, userMail, userPass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setSigninSuccess(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(`${errorMessage}`);
        setSigninError(errorMessage);
      });
  };

  const handlePasswordVisibility = (element) => {
    element.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto my-12">
      <form onSubmit={handleUserSignIn}>
        <fieldset className="bg-base-200 p-4 border border-base-300 rounded-box w-xs fieldset">
          <legend className="fieldset-legend">Sign In</legend>

          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="fmail"
          />

          <label className="label">Password</label>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              className="input"
              placeholder="Password"
              name="fpass"
            />
            <button
              onClick={handlePasswordVisibility}
              className="top-2 right-1 z-50 absolute btn btn-ghost btn-xs"
            >
              {passwordVisible ? <LuEye /> : <LuEyeClosed />}
            </button>
          </div>

          <button type="submit" className="mt-4 btn btn-neutral">
            Sign In
          </button>
          <p>
            Need an account?{" "}
            <Link className="font-semibold underline" to="/signup">
              Click here
            </Link>{" "}
            to sign up.
          </p>
        </fieldset>
      </form>

      {signinSuccess && (
        <p className="text-shadow-cyan-800 text-center">Sign in successful.</p>
      )}

      {signinError && (
        <p className="text-amber-800 text-center">
          Sign in failed!
          <br />
          {signinError}
        </p>
      )}
    </div>
  );
};

export default SigninPage;
