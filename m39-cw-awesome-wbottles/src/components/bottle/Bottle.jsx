import React from "react";
import "./bottle.css";

function Bottle({ bottle, handleAddToCart }) {
  // console.log(bottle);
  const { img, name, price, stock } = bottle;

  return (
    <div className="cardBottle">
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <p>{stock} remaining</p>
      <button onClick={()=>handleAddToCart(bottle)}>Buy Now</button>
    </div>
  );
}

export default Bottle;
