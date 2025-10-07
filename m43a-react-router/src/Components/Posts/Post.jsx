import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";

const Post = ({ post }) => {
  // console.log(post);
  const { id, title } = post;

  const postStyle = {
    border: "1px solid teal",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "2px 2px 12px rgba(0,0,0,0.1)",
  };

  const navigate = useNavigate();
  const handleNavigateToDetails = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <div style={postStyle}>
      <h4>{title}</h4>
      <Link to={`/posts/${id}`}>
        <button>Show Details (Link to)</button>
      </Link>
      
      <button onClick={handleNavigateToDetails}>Show Details (windows.location.href)</button>
    </div>
  );
};

export default Post;
