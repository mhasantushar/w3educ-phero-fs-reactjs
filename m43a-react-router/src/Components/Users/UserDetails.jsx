import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  // console.log(user);
  const { name, email, phone, website } = user;

  const userStyle = {
    border: "1px solid gray",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "2px 2px 12px rgba(0,0,0,0.1)",
  };

  const navigate = useNavigate();

  return (
    <div>
      <h3>User Details Here</h3>

      <div style={userStyle}>
        <h3>
          {name}
        </h3>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>Web: {website}</p>

        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    </div>
  );
};

export default UserDetails;
