import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [currentAuthUser, setCurrentAuthUser] = useState(null);

  const authInfo = {
    currentAuthUser,
    setCurrentAuthUser,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
