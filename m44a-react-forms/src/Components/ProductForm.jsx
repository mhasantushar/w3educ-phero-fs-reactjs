import React from "react";
import { useState } from "react";

const ProductForm = ({ handleAddProduct }) => {
  const [error, setError] = useState("");

  const handleProductSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const name = e.target.fname.value;
    const price = e.target.fprice.value;
    const quantity = e.target.fqnty.value;
    // console.log (name, price, quantity);

    //validation starts here...

    if (name.length === 0) {
      setError("Product name required");
      return;
    } else if (price.length === 0) {
      setError("Product price required");
      return;
    } else if (price <= 0) {
      setError("Price should be positive");
      return;
    } else if (quantity.length === 0) {
      setError("Product quantity required");
      return;
    } else if (quantity <= 0) {
      setError("Quantity should be positive");
      return;
    } else setError("");

    const newProduct = {
      name,
      price,
      quantity,
    };
    // console.log (newProduct);
    if (!error) handleAddProduct(newProduct);
  };

  return (
    <div>
      <h3>Product Management - Adding Product</h3>
      <form onSubmit={handleProductSubmit}>
        <input type="text" name="fname" placeholder="Product Name" />
        <br />
        <input type="text" name="fprice" placeholder="Product Price" />
        <br />
        <input type="text" name="fqnty" placeholder="Product Quantity" />
        <br />

        <input type="submit" value="Submit" />
      </form>

      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ProductForm;