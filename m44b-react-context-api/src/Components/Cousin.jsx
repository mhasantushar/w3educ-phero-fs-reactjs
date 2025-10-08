import React from "react";
import Friend from "./Friend";

const Cousin = ({ name, asset }) => {
  //drill-down sharing asset as props
  return (
    <div>
      <h3>{name}</h3>
      {name === "Aadee" && <p>{asset} via drilldown</p>}
      {name === "Othoi" && <Friend/>}
    </div>
  );
};

export default Cousin;
