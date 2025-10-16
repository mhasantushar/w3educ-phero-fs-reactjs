import React from 'react';
import { NavLink } from 'react-router';

const HeaderBlock = () => {
  return (
    <header>
      <div className='flex justify-between gap-12'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
      </div>
      <hr />
    </header>
  );
};

export default HeaderBlock;