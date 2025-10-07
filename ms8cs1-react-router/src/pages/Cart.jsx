import React from "react";
import { useContext } from "react";
import { CartContext } from "../providers/CartContext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <section>
      <h1 className="my-8 text-2xl">Cart: {cart.length} items added</h1>

      <div className="flex gap-2">
        {cart.map((plant) => (
          <div className="shadow px-8 py-2 border border-amber-500 rounded">
            <p key={plant.id}>{plant.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cart;
