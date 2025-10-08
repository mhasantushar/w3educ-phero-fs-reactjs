import React from "react";
import { useContext } from "react";
import { MoneyContext } from "./FamilyTree";

const Friend = () => {
  const [money, setMoney] = useContext(MoneyContext);

  return (
    <div>
      <h3>Tirondaaj</h3>

      <button
        onClick={() => {
          setMoney(money - 10000);
        }}
      >
        Lend 10,000
      </button>
    </div>
  );
};

export default Friend;
