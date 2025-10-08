import React from "react";

const ProductTable = ({ productsList }) => {
  return (
    <div>
      <h3>Product Managemment - Listing {productsList.length} Product</h3>

      <table>
        <thead>
          <tr>
            <th>Slno</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productsList.map((product, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
