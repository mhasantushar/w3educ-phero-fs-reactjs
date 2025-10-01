import React from "react";

const Container = ({children}) => {
  return ( 
    <div className="mx-auto p-4 container">
      {children}
    </div>
  );
};

export default Container;