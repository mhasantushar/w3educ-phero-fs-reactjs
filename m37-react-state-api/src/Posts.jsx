import { use } from "react";
import Post from "./Post";

export default function Posts({postPromise}) {
  const posts = use(postPromise);
  // console.log (posts);

  return (
    <div className="box">
      <h3>Posts Count: {posts.length}</h3>
      {
        posts.map(post => <Post key={post.id} post={post}/>)
      } 
    </div>
  )
}