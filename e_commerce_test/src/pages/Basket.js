import React, { useEffect, useState } from "react";
import "../styles/basket.css";

function Basket({ basketProducts, setBasketProducts }) {
  const [total, setTotal] = useState(0);

  const handleRemoveBasket = (id) => {
    setBasketProducts(basketProducts.filter((item) => item.id !== id));
  };

  const handlePrice = () => {
    let sum = 0;
    basketProducts.forEach((item) => {
      Math.floor((sum += item.price));
    });
    setTotal(sum.toFixed(2));
  };
  useEffect(() => {
    handlePrice();
  });
  return (
    <div>
      {basketProducts.map((product) => {
        return (
          <div className="basketProducts">
            <div className="title">
              <h1>{product.title}</h1>
            </div>
            <div className="image">
              <img src={product.image} />
            </div>
            <div className="price">
              <p>{product.price}</p>
            </div>
            <div className="desc">
              <p>{product.description}</p>
            </div>
            <div className="remove">
              <button onClick={() => handleRemoveBasket(product.id)}>
                Remove
              </button>
            </div>
          </div>
        );
      })}
      <h2>Total Price : {total}</h2>
    </div>
  );
}

export default Basket;
