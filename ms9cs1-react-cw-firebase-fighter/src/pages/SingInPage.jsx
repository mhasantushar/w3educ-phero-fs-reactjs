import "../index.css";
import React, { useState } from "react";
import WrapperComp from "../compos/WrapperComp";
import { Link } from "react-router";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import fbaseAuth from "../firebase/firebase.init";
import { toast } from "react-toastify";

const googleProvider = new GoogleAuthProvider();


const SingInPage = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    // console.log("Singup Handler");

    const vMail = e.target.fmail?.value || "";
    const vPass = e.target.fpass?.value || "";
    // console.log({ vMail, vPass });

    signInWithEmailAndPassword(fbaseAuth, vMail, vPass)
      .then((userCredential) => {
        e.target.reset();
        const user = userCredential.user;
        toast.success(`User ${user.email} logged in successfully.`);
        setLoggedInUser(user);
      })
      .catch((authError) => {
        toast.error(`${authError.code} - ${authError.message}.`);
      });
  };

  const handleGoogleSignin = (e) =>{
    e.preventDefault();

    signInWithPopup(fbaseAuth, googleProvider)
    .then(result => {
      // This gives a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)

      toast.success(`User ${user.email} logged in successfully.`);
      setLoggedInUser(user);      
    })
      .catch((error) => {
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
        toast.error(`Login with ${email} failed - ${error.message}.`);
      });
  }

  const handleUserSignOut = () => {
    signOut(fbaseAuth)
      .then(() => {
        toast.success("User signed off.");
        setLoggedInUser(null);
      })
      .catch((authError) => {
        toast.error(`${authError.code} - ${authError.message}.`);
      });
  };

  return (
    <div className="relative flex justify-center items-center bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 min-h-[calc(100vh-20px)] overflow-hidden">
      {/* Animated glow orbs */}
      <div className="absolute inset-0">
        <div className="top-10 left-10 absolute bg-purple-400/30 blur-xl rounded-full w-72 h-72 animate-pulse"></div>
        <div className="right-10 bottom-10 absolute bg-blue-400/30 blur-xl rounded-full w-72 h-72 animate-pulse"></div>
      </div>

      <WrapperComp>
        <div className="z-10 relative flex lg:flex-row flex-col justify-between items-center gap-10 p-6 lg:p-10 text-white">
          {/* Left section */}
          <div className="max-w-lg lg:text-left text-center">
            <h1 className="drop-shadow-lg font-extrabold text-5xl">
              Welcome Back
            </h1>
            <p className="mt-4 text-white/80 text-lg leading-relaxed">
              Sign in to continue your journey. Manage your account, explore new
              features, and more.
            </p>
          </div>

          {/* Login card */}
          <div className="bg-white/10 shadow-2xl backdrop-blur-lg p-8 border border-white/20 rounded-2xl w-full max-w-md">
            {loggedInUser ? (
              <div className="space-y-3 text-center">
                <img
                  src={
                    loggedInUser?.photoURL ||
                    "https://i.ibb.co/1GsJNNFs/App-Error.png"
                  }
                  className="mx-auto rounded-full w-36 h-36"
                  alt="User's Photo"
                />

                <h2 className="font-semibold text-xl">
                  {loggedInUser?.displayName || "Display name not found"}
                </h2>
                <p className="text-white/80">{loggedInUser?.email}</p>

                <button onClick={handleUserSignOut} className="my-btn">
                  Sign Out
                </button>
              </div>
            ) : (
              <form onSubmit={handleEmailSignIn} className="space-y-5">
                <h2 className="mb-2 font-semibold text-white text-2xl text-center">
                  Sign In
                </h2>

                <div>
                  <label className="block mb-1 text-sm">Email</label>
                  <input
                    type="email"
                    name="fmail"
                    // ref={emailRef}
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                    className="bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full text-white input input-bordered placeholder-white/60"
                  />
                </div>

                <div className="relative">
                  <label className="block mb-1 text-sm">Password</label>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="fpass"
                    placeholder="••••••••"
                    className="bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full text-white input input-bordered placeholder-white/60"
                  />
                  <span
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="top-[36px] right-[8px] z-50 absolute cursor-pointer"
                  >
                    {passwordVisible ? <LuEye /> : <LuEyeClosed />}
                  </span>
                </div>

                <button
                  className="hover:underline cursor-pointer"
                  // onClick={handleForgetPassword}
                  type="button"
                >
                  Forget password?
                </button>

                <button type="submit" className="my-btn">
                  Login
                </button>

                {/* Divider */}
                <div className="flex justify-center items-center gap-2 my-2">
                  <div className="bg-white/30 w-16 h-px"></div>
                  <span className="text-white/70 text-sm">or</span>
                  <div className="bg-white/30 w-16 h-px"></div>
                </div>

                {/* Google Signin */}
                <button
                  type="button"
                  onClick={handleGoogleSignin}
                  className="flex justify-center items-center gap-3 bg-white hover:bg-gray-100 px-5 py-2 rounded-lg w-full font-semibold text-gray-800 transition-colors cursor-pointer"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="w-5 h-5"
                  />
                  Continue with Google
                </button>

                {/* Github Signin */}
                <button
                  type="button"
                  // onClick={handleGithubSignin}
                  className="flex justify-center items-center gap-3 bg-white hover:bg-gray-100 px-5 py-2 rounded-lg w-full font-semibold text-gray-800 transition-colors cursor-pointer"
                >
                  <img
                    src="https://img.icons8.com/fluency/48/github.png"
                    alt="google"
                    className="w-5 h-5"
                  />
                  Continue with Github
                </button>

                <p className="mt-3 text-white/80 text-sm text-center">
                  Don’t have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-pink-300 hover:text-white underline"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </WrapperComp>
    </div>
  );
};

export default SingInPage;
