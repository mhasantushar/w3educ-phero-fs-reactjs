import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";
import "./familytree.css";

export const AssetContext = createContext("");
export const MoneyContext = createContext(0);

const FamilyTree = () => {
  const asset = "Diamond"; //will drill down to share
  const newAsset = "Gold"; //will use context api to share

  const [money, setMoney] = useState(0);

  return (
    <div className="family-tree">
      <h2>Family Tree</h2>
      <h4>Total Family Money: {money}</h4>

      {/* dealing with two contexts together... */}
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value={newAsset}>
          <Grandpa asset={asset} />
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default FamilyTree;
