import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import SignonComp from "../compos/SignonComp";
import SigninComp from "../compos/SigninComp";

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
        path: "/signon",
        element: <SignonComp />,
      },
      {
        path: "/signin",
        element: <SigninComp />,
      },
    ],
  },
  {
    path: "*",
    element: <h2>Error 404</h2>,
  },
]);

export default router;
