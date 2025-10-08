import React from "react";
import Cousin from "./Cousin";
import { useContext } from "react";
import { MoneyContext } from "./FamilyTree";

const Aunt = () => {
  const [money, setMoney] = useContext (MoneyContext);
  
  return (
    <div>
      <h3>Aunt</h3>

      <button
        onClick={() => {
          setMoney(money - 20000);
        }}
      >
        Lend 20,000
      </button>

      <section className="flex">
        <Cousin name="Lubdhak" />
        <Cousin name="Kalpurush" />
      </section>
    </div>
  );
};

export default Aunt;
