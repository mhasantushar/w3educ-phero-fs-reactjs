import React from "react";

const WrapperComp = ({ className, children }) => {
  return <div className={`${className} container mx-auto`}>
    {children}
  </div>;
};

export default WrapperComp;
