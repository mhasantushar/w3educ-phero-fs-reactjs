import React from "react";
import Cousin from "./Cousin";

const Uncle = ({ asset }) => {
  //drill-down sharing asset as props
  console.log(asset);

  return (
    <div>
      <h3>Uncle</h3>
      <section className="flex">
        <Cousin name="Aadee" asset={asset} />
        <Cousin name="Othoi" />
      </section>
    </div>
  );
};

export default Uncle;
