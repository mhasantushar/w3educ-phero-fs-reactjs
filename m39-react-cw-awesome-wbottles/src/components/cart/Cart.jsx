import React from "react";
import "./cart.css";

const Cart = ({ addToCart, handleRemFromCart }) => {
  // console.log(addToCart);
  return (
    <div className="wrapcart">
      {addToCart.map((bottle) => (
        <div key={bottle.id}>
          <img src={bottle.img} alt={bottle.name} />

          <button onClick={() => handleRemFromCart(bottle.id)}>Remove</button>
        </div>
      ))}
      <br />
    </div>
  );
};

export default Cart;
