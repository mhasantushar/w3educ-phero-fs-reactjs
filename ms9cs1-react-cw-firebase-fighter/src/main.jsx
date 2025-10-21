import "./index.css";
import AuthProvider from "./context/AuthProvider.jsx";
import router from "./routing/router.jsx";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { StrictMode } from "react";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

    <ToastContainer theme="colored" />
  </StrictMode>
);
