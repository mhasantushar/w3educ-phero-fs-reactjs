import React, { use } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { authLoading, loggedInUser } = use(AuthContext);

  const intendedPrivateLocation = useLocation();
  // console.log(intendedPrivateLocation);
  // this var stores the private location an user intends to go
  // why 'intends'? coz, clicking a private location will reach upto this line
  // later the logic will define whether user is logged in to visit private places

  if (authLoading) {
    return (
      <span className="flex justify-center mx-auto my-12 loading-ring loading loading-xl"></span>
    );
    // there is a prob with PrivateRoute logic
    // when a page reloads, auth status becomes void, so private pages are redirected to the login page according to the logic
    // this authLoading state deals with that
  }

  if (loggedInUser) { 
    return children;
  }

  // sharing the intended private page's address in state value while routing to login page
  return <Navigate state={intendedPrivateLocation?.pathname} to="/signin" />;
};

export default PrivateRoute;
