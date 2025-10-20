import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
// import fbaseAuth from "../firebase/firebase.init";
// import { signInWithEmailAndPassword } from "firebase/auth";
import AuthContext from "../contexts/AuthContext";

const SigninComp = () => {
  // const authInfo = use(AuthContext);
  // // console.log (authInfo);
  const { signinUserAccount, signinGoogleAccount } = use(AuthContext);

  // following 2 lines are to check whether any private page sent here to login
  const location = useLocation();
  const navigate = useNavigate();

  const handleUserSingIn = (e) => {
    e.preventDefault();

    const vMail = e.target.fmail?.value;
    const vPass = e.target.fpass?.value;
    // console.log(vMail, vPass);

    // signInWithEmailAndPassword(fbaseAuth, vMail, vPass)
    // above direct function call is replaced by a function from authContext in the line below
    signinUserAccount(vMail, vPass)
      .then((userCredential) => {
        const user = userCredential.user;
        alert(`Accout ${user.email} has been logged in`);
        e.target.reset();

        // if any private page sent here to login, then going back to that page
        // otherwise, going to homepage
        navigate(location?.state || "/");
      })
      .catch((error) => {
        alert(`Log in failed! ${error.code} - ${error.message}`);
      });
  };

  const handleGoogleSignIn = () => {
    signinGoogleAccount()
      .then((userCredential) => {
        const user = userCredential.user;
        alert(`Accout ${user.email} has been logged in`);

        // if any private page sent here to login, then going back to that page
        // otherwise, going to homepage
        navigate(location?.state || "/");
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

      <section className="mt-6">
        <button
          onClick={handleGoogleSignIn}
          className="bg-white border-[#e5e5e5] text-black btn btn-wide"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </section>
    </div>
  );
};

export default SigninComp;
