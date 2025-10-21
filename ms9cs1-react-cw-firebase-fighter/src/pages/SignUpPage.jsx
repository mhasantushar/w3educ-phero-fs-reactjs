import "../index.css";
import fbaseAuth from "../firebase/firebase.init";
import WrapperComp from "../compos/WrapperComp";
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { LuEye, LuEyeClosed } from "react-icons/lu";

const SignUpPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleEmailSignup = (e) => {
    e.preventDefault();
    // console.log("Singup Handler");

    const vName = e.target.fname?.value || "";
    const vPhoto = e.target.fphoto?.value || "";
    const vMail = e.target.fmail?.value || "";
    const vPass = e.target.fpass?.value || "";
    // console.log({vMail, vPass});

    if (vPass.length < 6) {
      toast.error("Password should be at least 6 characters.");
      return;
    }

    const regExpression =
      /^(?:(?=.*[a-z])(?=.*[A-Z])(?=.*\d)|(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])| (?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])|(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])).{8,}$/;
    if (!regExpression.test(vPass)) {
      toast.error(
        "Password should contain any three of these patterns: uppercase, lowercase, digits, and symbols."
      );
      return;
    }

    createUserWithEmailAndPassword(fbaseAuth, vMail, vPass)
      .then((userCredential) => {
        // e.target.reset();
        // console.log(userCredential);

        const user = userCredential.user;
        toast.success(`Accout for ${user.email} has been created.`);

        // now updating additional profile info..
        updateProfile(fbaseAuth.currentUser, {
          displayName: vName,
          photoURL: vPhoto,
        })
          .then(() => {
            // additional profile info updated
          })
          .catch((err) => {
            toast.warn(
              `Account created, but additional info not updated! ${err.code} - ${err.message}.`
            );
          });
        // updating additional profile info done

        // now sending verifucation email..
        sendEmailVerification(fbaseAuth.currentUser)
          .then(() => {
            const email = fbaseAuth.currentUser.email;
            toast.info(`Verification email sent to ${email}`);
          })
          .catch((err) => {
            toast.warn(
              `Account created, but verification email not sent! ${err.code} - ${err.message}.`
            );
          });
          // sending verification email done
      })
      .catch((error) => {
        toast.error(
          `Account creation failed! ${error.code} - ${error.message}.`
        );
      });
  };

  return (
    <div className="relative flex justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 min-h-[96vh] overflow-hidden">
      {/* Animated floating circles */}
      <div className="absolute inset-0">
        <div className="top-10 left-10 absolute bg-pink-400/30 blur-2xl rounded-full w-72 h-72 animate-pulse"></div>
        <div className="right-10 bottom-10 absolute bg-purple-400/30 blur-2xl rounded-full w-72 h-72 animate-pulse"></div>
      </div>

      <WrapperComp>
        <div className="z-10 relative flex lg:flex-row flex-col justify-between items-center gap-10 p-6 lg:p-10 text-white">
          <div className="max-w-lg lg:text-left text-center">
            <h1 className="drop-shadow-lg font-extrabold text-5xl">
              Create Your Account
            </h1>
            <p className="mt-4 text-white/80 text-lg leading-relaxed">
              Join our community and unlock exclusive features. Your journey
              begins here!
            </p>
          </div>

          <div className="bg-white/10 shadow-2xl backdrop-blur-lg p-8 border border-white/20 rounded-2xl w-full max-w-md">
            <h2 className="mb-6 font-semibold text-white text-2xl text-center">
              Sign Up
            </h2>

            <form onSubmit={handleEmailSignup} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium text-sm">Name</label>
                <input
                  type="text"
                  name="fname"
                  placeholder="Full name here"
                  className="bg-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400 w-full text-white input input-bordered placeholder-white/60"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-sm">Photo</label>
                <input
                  type="text"
                  name="fphoto"
                  placeholder="Your photo URL here"
                  className="bg-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400 w-full text-white input input-bordered placeholder-white/60"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-sm">Email</label>
                <input
                  type="email"
                  name="fmail"
                  placeholder="example@email.com"
                  className="bg-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400 w-full text-white input input-bordered placeholder-white/60"
                />
              </div>

              <div className="relative">
                <label className="block mb-1 font-medium text-sm">
                  Password
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="fpass"
                  placeholder="••••••••"
                  className="bg-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400 w-full text-white input input-bordered placeholder-white/60"
                />
                <span
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="top-[36px] right-[8px] z-50 absolute cursor-pointer"
                >
                  {passwordVisible ? <LuEye /> : <LuEyeClosed />}
                </span>
              </div>

              <button type="submit" className="my-btn">
                Sign Up
              </button>

              <div className="mt-3 text-center">
                <p className="text-white/80 text-sm">
                  Already have an account?{" "}
                  <Link
                    to="/signin"
                    className="font-medium text-pink-300 hover:text-white underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </WrapperComp>
    </div>
  );
};

export default SignUpPage;
