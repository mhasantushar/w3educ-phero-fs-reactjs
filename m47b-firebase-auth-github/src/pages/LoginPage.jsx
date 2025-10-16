import React, { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
 //Github doesn't provide emails normally like Google, so had to put this code

const LoginPage = () => {
  const [googleUser, setGoogleUser] = useState(null);
  const [githubUser, setGithubUser] = useState(null);

  const handleGoogleSignIn = () => {
    // console.log("Google sign in clicked");

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // getting Google Access Token, used to access Google API later..
        // const googleCredential = googleProvider.credentialFromResult(result);
        // if (googleCredential) {
        //   const googleAccessToken = Credential.accessToken;
        // }
        const tempGoogleUser = result.user;
        // console.log(tempGoogleUser);
        // IdP data available using getAdditionalUserInfo(result)
        setGoogleUser(tempGoogleUser);
      })
      .catch((error) => {
        const googleAuthErrorMessage = error.message;
        // const googleAuthErrorCode = error.code;
        // const googleAuthErrorEmail = error.customData.email;
        // const googleAuthCredential = googleProvider.credentialFromError(error);
        console.log(googleAuthErrorMessage);
      });
  };

  const handleGithubSignIn = () => {
    console.log("Github sign in clicked");

    signInWithPopup(auth, githubProvider)
      .then((result) => {
        // getting Github Access Token, used to access Github API later..
        // const githubCredential =
        //   GithubAuthProvider.credentialFromResult(result);
        // if (githubCredential) {
        //   const githubAccessToken = githubCredential.accessToken;
        // }
        const tempGithubUser = result.user;
        console.log(tempGithubUser);
        // Idp data available using getAdditionalUserInfo(result)

        // But, Github result object usually doesn't share email address
        // So, we need to dig that out from provider data.. 
        // See console.log(tempGithubUser) result for details (provider data resides inside an array)
        if(!tempGithubUser.email){
          if (tempGithubUser.providerData){
            const gitProviderDetails = tempGithubUser.providerData.find(elem => elem.providerId ==='github.com');
            if(gitProviderDetails && gitProviderDetails.email){
              tempGithubUser.email = gitProviderDetails.email;
            }
          }
        }

        setGithubUser(tempGithubUser);
      })
      .catch((error) => {
        const githubAuthErrorMessage = error.message;
        // const githubAuthErrorCode = error.code;
        // const githubAuthErrorEmail = error.customData.email;
        // const githubAuthCredential = GithubAuthProvider.credentialFromError(error);
        console.log(githubAuthErrorMessage);
      });
  };

  const handleGoogleSignOff = () => {
    signOut(auth)
      .then(() => {
        alert("Google signning off completed");
        setGoogleUser(null);
      })
      .catch((error) => {
        alert(`Google signning off failed due to ${error.message}`);
      });
  };

  const handleGithubSignOff = () => {
    signOut(auth)
      .then(() => {
        alert("Github signning off completed");
        setGithubUser(null);
      })
      .catch((error) => {
        alert(`Github signning off failed due to ${error.message}`);
      });
  };

  return (
    <div>
      <hr />
      <h1>LOGIN</h1>
      <section className="my-12">
        <div className="flex justify-center gap-6">
          {/* <button onClick={handleGoogleSignIn}>Sign In Google</button>
          <button onClick={handleGoogleSignOff}>Sign Off Google</button> */}
          {googleUser ? (
            <button onClick={handleGoogleSignOff}>Sign Off Google</button>
          ) : (
            <button onClick={handleGoogleSignIn}>Sign In Google</button>
          )}
        </div>

        {googleUser && (
          <div>
            <h3 className="mt-6 text-3xl">{googleUser?.displayName}</h3>
            <p>Email: {googleUser?.email}</p>
            <img
              className="mx-auto"
              src={googleUser.photoURL}
              alt="Google User Image"
            />
          </div>
        )}
      </section>

      <hr />
      <section className="my-12">
        <div className="flex justify-center gap-6">
          {/* <button onClick={handleGithubSignIn}>Sign In Github</button>
          <button onClick={handleGithubSignOff}>Sign Off Github</button> */}
          {githubUser ? (
            <button onClick={handleGithubSignOff}>Sign Off Github</button>
          ) : (
            <button onClick={handleGithubSignIn}>Sign In Github</button>
          )}
        </div>

        {githubUser && (
          <div>
            <h3 className="mt-6 text-3xl">{githubUser?.displayName}</h3>
            <p>Email: {githubUser?.email}</p>
            <img src={githubUser.photoURL} alt="Github User Image" />
          </div>
        )}
      </section>
      <hr />
    </div>
  );
};

export default LoginPage;
