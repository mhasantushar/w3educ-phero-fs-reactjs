import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import { HashLoader } from "react-spinners";

const Private = ({ children }) => {
  const { loggedInUser, pageIsLoading } = useContext(AuthContext);

  const intendedLocation = useLocation();
  // console.log (intendedLocation);

  if (pageIsLoading) {
    return (
      <div className="flex justify-center items-center h-[calc(100dvh-300px)]">
        <HashLoader color="#6b3fd8" />;
      </div>
    );
  }

  if (!loggedInUser) {
    return <Navigate to="/signin" state={intendedLocation.pathname} />;
  }

  return children;
};

export default Private;
