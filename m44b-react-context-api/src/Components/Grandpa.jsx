import React from "react";
import Dad from "./Dad";
import Uncle from "./Uncle";
import Aunt from "./Aunt";
import "./familytree.css";

const Grandpa = ({ asset }) => {
  //drill-down sharing asset as props
  console.log(asset);

  return (
    <div>
      <h3>Grandpa</h3>
      <section className="flex">
        <Dad />
        <Uncle asset={asset} />
        <Aunt />
      </section>
    </div>
  );
};

export default Grandpa;
