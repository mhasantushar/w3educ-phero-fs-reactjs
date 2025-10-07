import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { useState } from "react";
import { CartContext } from "../providers/CartContext";

const RootLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation.state);

  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{cart, setCart}}>
      <Navbar />
      {navigation.state === "loading" ? (
        <Loading />
      ) : (
        <main className="mx-auto w-11/12 min-h-[calc(100vh-285px)]">
          <Outlet/>
        </main>
      )}
      <Footer />
    </CartContext.Provider>
  );
};

export default RootLayout;
