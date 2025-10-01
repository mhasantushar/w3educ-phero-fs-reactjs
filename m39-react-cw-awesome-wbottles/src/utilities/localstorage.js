const getCartFromLS = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    const storedCart = JSON.parse(storedCartString);
    return storedCart;
  } else return [];
};

const addItemToCartLS = (id) => {
  const cart = getCartFromLS();
  cart.push(id);
  saveCartToLS(cart);
};

const saveCartToLS = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const remFromCartLS = (id) => {
  const storedCart = getCartFromLS();
  const remainingCart = storedCart.filter((storedId) => storedId !== id);
  saveCartToLS(remainingCart);
};

export { getCartFromLS, addItemToCartLS, remFromCartLS };
