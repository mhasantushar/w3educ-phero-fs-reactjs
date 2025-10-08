import React, { useContext } from "react";
import { AssetContext } from "./FamilyTree";

const Special = () => {

  const asset = useContext(AssetContext);
  console.log(asset); 

  return (
    <div>
      <h3>Special</h3>
      <p>{asset} via contextapi</p>
    </div>
  );
};

export default Special;
