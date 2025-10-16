import React from 'react';
import Header from '../compos/Header';
import { Outlet } from 'react-router';
import Footer from '../compos/Footer';

const RootLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default RootLayout;