import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";

import Home from "./Components/Home/Home.jsx";
import Mobiles from "./Components/Mobiles/Mobiles.jsx";
import Root from "./components/Root/Root.jsx";
import Laptops from "./Components/Laptops/Laptops.jsx";
import Users from "./Components/Users/Users.jsx";
import Users2 from "./Components/Users2/Users2.jsx";
import UserDetails from "./Components/Users/UserDetails.jsx";
import Posts from "./Components/Posts/Posts.jsx";
import Post from "./Components/Posts/Post.jsx";
import PostDetails from "./Components/Posts/PostDetails.jsx";

const userDataPromise = fetch(
  "https://jsonplaceholder.typicode.com/users"
).then((resp) => resp.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/mobiles", Component: Mobiles },
      { path: "/laptops", Component: Laptops },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "/users/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },
      {
        path: "/users2",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Users2 userDataPromise={userDataPromise} />
          </Suspense>
        ),
      },
      {
        path: "/posts",
        element: <Posts />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "/posts/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails />,
      },
    ],
  },
  {
    path: "/about",
    element: <h2>Full Name: Mahamudul Hasan</h2>,
  },
  {
    path: "/contact",
    element: <h2>Contact: +8801712345678</h2>,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "*",
    element: <h4>Path not found! 404</h4>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);