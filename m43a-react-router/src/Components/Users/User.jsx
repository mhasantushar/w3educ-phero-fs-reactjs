import React, { Suspense, useState } from "react";
import { Link, useNavigate } from "react-router";
import UserInfoInside from "./UserInfoInside";

const User = ({ user }) => {
  const { id, name } = user;

  const userStyle = {
    border: "1px solid gray",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "2px 2px 12px rgba(0,0,0,0.1)",
  };

  const navigate = useNavigate();
  const handleNavigateToDetails = () => {
    navigate(`/users/${id}`);
  };

  const [showDetailsHere, setShowDetailsHere] = useState(false);
  const userInfoPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(resp => resp.json())

  return (
    <div style={userStyle}>
      <h3>{name}</h3>
      <Link to={`/users/${id}`}>Details (Linkto) </Link>

      <button onClick={handleNavigateToDetails}>Details (useNavigate)</button>

      <br />
      <button onClick={()=>setShowDetailsHere(!showDetailsHere)}>
        {showDetailsHere ? "Hide details from here" : "Show details right here"}
      </button>

      {
        showDetailsHere && <Suspense fallback = {<p>Loading details right here...</p>}>
            <UserInfoInside userInfoPromise={userInfoPromise}/>
          </Suspense>
      }
    </div>
  );
};

export default User;
