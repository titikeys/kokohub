import React from "react";
import "./productlist.css";
import Product from "../product/Product";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create and inspire</h1>
        <p className="pl-desc"></p>
      </div>
      <div className="pl-list">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default ProductList;
