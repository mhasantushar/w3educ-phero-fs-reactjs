import React from "react";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import HeaderComp from "../compos/HeaderComp";

const RootLayout = () => {
  return (
    <div>
      <HeaderComp />
      <Outlet />

      <ToastContainer theme="colored"/>
    </div>
  );
};

export default RootLayout;
