import React from "react";
import { use } from "react";

const UserInfoInside = ({ userInfoPromise }) => {
  const user = use(userInfoPromise);
  // console.log (user);
  const { email, phone, website } = user;

  const userStyle = {
    border: "1px solid gray",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "2px 2px 12px rgba(0,0,0,0.1)",
  };

  return (
    <div style={userStyle}>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Web: {website}</p>
    </div>
  );
};

export default UserInfoInside;
