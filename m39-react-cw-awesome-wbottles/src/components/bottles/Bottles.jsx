import React, { use, useEffect, useState } from "react";
import Bottle from "../bottle/Bottle";
import Cart from "../cart/Cart";
import "./bottles.css";
import {
  addItemToCartLS,
  getCartFromLS,
  remFromCartLS,
} from "../../utilities/localstorage";

const Bottles = ({ promiseBottles }) => {
  const bottles = use(promiseBottles);
  // console.log(bottles);

  const [addToCart, setAddToCart] = useState([]);

  const handleAddToCart = (bottle) => {
    // console.log ("Bottle will be added to the cart", bottle);
    const newCart = [...addToCart, bottle];
    setAddToCart(newCart);
    // console.log(addToCart);

    addItemToCartLS(bottle.id);
  };

  useEffect(() => {
    const storedCartIds = getCartFromLS();
    // console.log(storedCartIds, bottles);

    const storedCart = [];
    for (const id of storedCartIds) {
      // console.log(id);
      const addedBottle = bottles.find((bottle) => bottle.id === id);
      if (addedBottle) {
        storedCart.push(addedBottle);
      }
    }
    // console.log(storedCart);
    setAddToCart(storedCart);
  }, [bottles]);

  const handleRemFromCart = (id) => {
    console.log("About to remove item from cart", id);

    const remainingCart = addToCart.filter((bottle) => bottle.id !== id);
    setAddToCart(remainingCart);
    remFromCartLS(id);
  };

  return (
    <div>
      <h3>Bottles Listed: {bottles.length}</h3>
      <h4>{addToCart.length} added to cart</h4>
      <Cart addToCart={addToCart} handleRemFromCart={handleRemFromCart} />

      <div className="wrapBottle">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handleAddToCart={handleAddToCart}
            bottle={bottle}
          />
        ))}
      </div>
    </div>
  );
};

export default Bottles;
