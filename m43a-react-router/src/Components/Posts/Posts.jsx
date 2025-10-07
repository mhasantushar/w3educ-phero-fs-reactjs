import React from "react";
import { useLoaderData } from "react-router";
import Post from "./Post";

const Posts = () => {
  const posts = useLoaderData();
  // console.log(posts);

  return (
    <div>
      <h2>All Posts: {posts.length}</h2>
      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
