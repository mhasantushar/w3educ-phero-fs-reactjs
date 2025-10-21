import React from "react";
import { Outlet } from "react-router";
import HeaderComp from "../compos/HeaderComp";

const RootLayout = () => {
  return (
    <div>
      <HeaderComp />
      <Outlet />
    </div>
  );
};

export default RootLayout;
