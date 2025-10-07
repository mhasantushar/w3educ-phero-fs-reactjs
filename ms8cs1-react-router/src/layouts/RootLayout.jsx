import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-11/12 min-h-[calc(100vh-285px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
