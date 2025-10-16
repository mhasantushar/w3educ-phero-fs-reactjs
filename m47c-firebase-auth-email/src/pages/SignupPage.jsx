import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "../firebase/firebase.init";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link } from "react-router";

const SignupPage = () => {
  const [signupError, setSignupError] = useState(null);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleUserSignUp = (event) => {
    event.preventDefault();
    const userMail = event.target.fmail.value;
    const userPass = event.target.fpass.value;
    const termAndC = event.target.fterm.checked;

    setSignupSuccess(false);
    setSignupError(null);

    //checking if password is alteast 8 char long..
    const regexPasswordPattern =
      /^(?=(?:.*[A-Z])?(?:.*[a-z])?(?:.*\d)?(?:.*[^A-Za-z\d])?.{6,})(?=(?:.*[A-Z].*)?(?:.*[a-z].*)?(?:.*\d.*)?(?:.*[^A-Za-z\d].*)?(?:.*[A-Z].*[a-z]|.*[A-Z].*\d|.*[A-Z].*[^A-Za-z\d]|.*[a-z].*\d|.*[a-z].*[^A-Za-z\d]|.*\d.*[^A-Za-z\d])).{6,}$/;
    if (!regexPasswordPattern.test(userPass)) {
      setSignupError(
        "Password should have any three of upper case, lower case, digits, and symbols"
      );
      return;
    }

    if (!termAndC) {
      setSignupError("Please accept terms and conditions.");
      return;
    }

    createUserWithEmailAndPassword(auth, userMail, userPass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setSignupSuccess(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(`${errorMessage}`);
        setSignupError(errorMessage);
      });
  };

  const handlePasswordVisibility = (element) => {
    element.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto my-12">
      <form onSubmit={handleUserSignUp}>
        <fieldset className="bg-base-200 p-4 border border-base-300 rounded-box w-xs fieldset">
          <legend className="fieldset-legend">Sign Up</legend>

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

          <label className="label">
            <input
              type="checkbox"
              className="checkbox checkbox-md"
              name="fterm"
            />
            Accept terms and conditions
          </label>

          <button type="submit" className="mt-4 btn btn-neutral">
            Sign Up
          </button>
          <p>
            Already have an account? <Link className="font-semibold underline" to="/signin">Click here</Link> to
            sign in.
          </p>
        </fieldset>
      </form>

      {signupSuccess && (
        <p className="text-shadow-cyan-800 text-center">Sign up successful.</p>
      )}

      {signupError && (
        <p className="text-amber-800 text-center">
          Sign up failed!
          <br />
          {signupError}
        </p>
      )}
    </div>
  );
};

export default SignupPage;
