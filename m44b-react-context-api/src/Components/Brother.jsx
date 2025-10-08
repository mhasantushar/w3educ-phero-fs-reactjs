import React, { useContext } from "react";
import { MoneyContext } from "./FamilyTree";

const Brother = () => {
  const [money, setMoney] = useContext(MoneyContext);

  return (
    <div>
      <h3>Brother</h3>
      
      <button
        onClick={() => {
          setMoney(money + 50000);
        }}
      >
        Donate 50,000
      </button>
    </div>
  );
};

export default Brother;
