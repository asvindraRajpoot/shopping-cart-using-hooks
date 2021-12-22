import React from "react";
import OrderBy from "./OrderBy";
import { useState, useEffect } from 'react';


function Products(props) {
  let [selectedOrder, setState] = useState("");



  function handleOrderBy(event) {
    setState({ selectedOrder: event.target.value });

  };



  function handleOrderProducts(order, products) {
    
    let sortedProducts = [...products];
    if (order.selectedOrder === "highest") {
      console.log('inside highest');
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
    }
    if (order.selectedOrder === "lowest") {
      console.log('inside lowest');
   
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    }
    return sortedProducts;
  };


  let products = handleOrderProducts(selectedOrder, props.data);

  useEffect(() => {
    products = handleOrderProducts(selectedOrder, props.data);
    
  })




  return (
    <div>
      <div className="products-filter">
        <p>
          {`${props.data.length} Product${props.data.length > 1 ? "s" : ""
            } found.`}{" "}
        </p>
        <OrderBy
          selectedOrder={selectedOrder}
          handleOrderBy={handleOrderBy}
        />
      </div>
      <div className="flex wrap">
        {products.map((product, i) => (
          <Product {...product} key={i} />
        ))}
      </div>
    </div>
  );
}




function Product(props) {
  return (
    <div className="product-item">
      <div className="product-label">Free Shipping</div>
      <img
        className="product-item-img"
        src={`/static/products/${props.sku}_1.jpg`}
        alt={props.title}
      />
      <div className="product-item-details">
        <p className="product-item-title">{props.title}</p>
        <div className="line"></div>
        <h3 className="product-item-price">
          {props.currencyFormat + props.price}
        </h3>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}
export default Products;
