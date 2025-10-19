import React from "react";
import { Outlet } from "react-router";
import HeaderComp from "../compos/HeaderComp";
import FooterComp from "../compos/FooterComp";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-dvh">
      <HeaderComp />
      <div className="flex-1">
        <Outlet/>
      </div>
      <FooterComp />
    </div>
  );
};

export default RootLayout;
