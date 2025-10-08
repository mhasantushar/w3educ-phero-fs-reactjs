import React from "react";
import Special from "./Special";
import { useContext } from "react";
import { MoneyContext } from "./FamilyTree";

const Myself = () => {
  const [money, setMoney] = useContext(MoneyContext);

  return (
    <div>
      <h3>Myself</h3>
      
      <button
        onClick={() => {
          setMoney(money + 50000);
        }}
      >
        Donate 50,000
      </button>

      <section>
        <Special />
      </section>
    </div>
  );
};

export default Myself;
