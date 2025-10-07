import React from "react";
import Header from "../Head/Header";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import "./Root.css";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <div>
      <Header />
      <div className="root-main">
        <Sidebar />

        {isNavigating && <h3>Loading...</h3>} 
        {/* global spinner (global pending navigation) */}
        <Outlet /> {/* dynamic part */}
      </div>
      <Footer />
    </div>
  );
};

export default Root;
