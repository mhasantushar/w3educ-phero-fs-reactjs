import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Link } from "react-router";
import fbaseAuth from "../firebase/firebase.init";

const SigninComp = () => {
  const handleUserSingIn = (e) => {
    e.preventDefault();

    const vMail = e.target.fmail?.value;
    const vPass = e.target.fpass?.value;
    console.log(vMail, vPass);

    signInWithEmailAndPassword(fbaseAuth, vMail, vPass)
      .then((userCredential) => {
        const user = userCredential.user;
        alert(`Accout ${user.email} has been logged in`);
      })
      .catch((error) => {
        alert(`Log in failed! ${error.code} - ${error.message}`);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      <h1 className="my-12 font-semibold text-3xl">User Login</h1>

      <section>
        <form onSubmit={handleUserSingIn}>
          <fieldset className="bg-base-200 p-4 border border-base-300 rounded-box w-xs fieldset">
            <legend className="fieldset-legend">Sign In</legend>

            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="fmail"
              required
            />

            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="fpass"
              required
            />

            <p>
              Forget password?{" "}
              <Link className="link link-primary">Reset here..</Link>
            </p>

            <button type="submit" className="mt-4 btn btn-neutral">
              Login
            </button>
            <p>
              Don't have an account?{" "}
              <Link className="link link-primary" to="/signon">
                Sign on here..
              </Link>
            </p>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default SigninComp;
