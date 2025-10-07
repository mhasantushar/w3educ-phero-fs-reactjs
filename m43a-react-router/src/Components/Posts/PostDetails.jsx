import { Navigate, useLocation, useNavigate } from "react-router";
import { useParams } from "react-router";
import { useLoaderData } from "react-router";

const PostDetails = () => {
  const post = useLoaderData();
  // console.log(post);
  const { title, body } = post;

  // const param = useParams();
  // // console.log (param);
  // const { pagNavId } = param.postId;
  // // NOTE: You can get navigation id of this page like this

  const navigate = useNavigate();
  // console.log(navigate);

  const location = useLocation();
  // console.log(location);

  return (
    <div>
      <h4>{title}</h4>
      <p>{body}</p>

      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate("/")}>Home</button>
      <br />
      <button
        onClick={() => alert(`You are at: ${location.pathname} in app path`)}
      >
        What's my url?
      </button>
    </div>
  );
};

export default PostDetails;
