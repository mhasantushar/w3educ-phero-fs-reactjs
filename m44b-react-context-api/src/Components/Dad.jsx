import React from "react";
import Myself from "./Myself";
import Brother from "./Brother";
import Sister from "./Sister";

const Dad = () => {
  return (
    <div>
      <h3>Dad</h3>
      <section className="flex">
        <Myself />
        <Brother />
        <Sister />
      </section>
    </div>
  );
};

export default Dad;
