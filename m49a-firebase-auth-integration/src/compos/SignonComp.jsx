import React from "react";
import { Link } from "react-router";
import fbaseAuth from "../firebase/firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignonComp = () => {
  const handleUserSignOn = (e) => {
    e.preventDefault();

    const vName = e.target.fname?.value;
    const vMail = e.target.fmail?.value;
    const vPass = e.target.fpass?.value;
    const vPurl = e.target.fpurl?.value;
    // const vTerm = e.target.fterm?.checked;
    // console.log (vName, vMail, vPass, vPurl);

    createUserWithEmailAndPassword(fbaseAuth, vMail, vPass)
      .then((userCredential) => {
        const user = userCredential.user;
        alert(`Account ${user.email} has been created!`);
      })
      .catch((error) => {
        alert(`Account creation failed!
        ${error.code} - ${error.message}`);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      <h1 className="my-12 font-semibold text-3xl">User Registration</h1>

      <section>
        <form onSubmit={handleUserSignOn}>
          <fieldset className="bg-base-200 p-4 border border-base-300 rounded-box w-xs fieldset">
            <legend className="fieldset-legend">Sign On</legend>

            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Full Name"
              name="fname"
            />

            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Valid Email"
              name="fmail"
              required
            />

            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Strong Password"
              name="fpass"
              required
            />

            <label className="label">Photo</label>
            <input
              type="url"
              className="input"
              placeholder="Photo URL"
              name="fpurl"
            />

            <label className="label">
              <input
                type="checkbox"
                className="checkbox checkbox-md"
                name="fterm"
                required
              />
              Accept terms and conditions
            </label>

            <button type="submit" className="mt-4 btn btn-neutral">
              Login
            </button>
            <p>
              Already have an account?{" "}
              <Link className="link link-primary" to="/signin">
                Sign in here..
              </Link>
            </p>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default SignonComp;
