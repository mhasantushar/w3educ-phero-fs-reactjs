import React from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';
import { useState } from 'react';

const ProductMgmt = () => {

  const [productsList, setProductsList] = useState([]);

  const handleAddProduct = (newProduct) => {
    const newProductsList = [...productsList, newProduct];
    setProductsList (newProductsList);
  }

  return (
    <div>
      <ProductForm handleAddProduct={handleAddProduct} />
      <ProductTable productsList={productsList}/>
    </div>
  );
};

export default ProductMgmt;