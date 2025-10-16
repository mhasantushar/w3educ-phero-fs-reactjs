import React from 'react';
import HeaderBlock from '../compos/HeaderBlock';
import { Outlet } from 'react-router';
import FooterBlock from '../compos/FooterBlock';

const RootLayout = () => {
  return (
    <div>
      <HeaderBlock/>
      <Outlet/>
      <FooterBlock/>
    </div>
  );
};

export default RootLayout;