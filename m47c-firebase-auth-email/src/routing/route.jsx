import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/signin',
        element: <SigninPage/>
      },
      {
        path: '/signup',
        element: <SignupPage/>
      }
    ],
  },
  {
    path: "*",
    element: <h2>Error 404!</h2>,
  },
]);

export default router;
