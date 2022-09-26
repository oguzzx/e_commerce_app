import React from "react";

import "../styles/product.css";

function Product({ product, handleClickFavorite, handleClickBasket }) {
  return (
    <div className="product">
      <div className="product_image">
        <img src={product.image} />
      </div>
      <div className="product_title">
        <h3>{product.title}</h3>
      </div>
      <div className="product_desctiption">
        <p>{product.description}</p>
      </div>
      <div className="product_price">
        <h3>Fiyat : {product.price}</h3>
      </div>
      <div className="product_rating">
        <h3>Raiting : {product.rating.rate}</h3>
      </div>
      <div className="addToCart">
        <button onClick={() => handleClickBasket(product)}>Add to Cart</button>
      </div>
      <div className="addToFavoriteCart">
        <button onClick={() => handleClickFavorite(product)}>
          Add to Favorite
        </button>
      </div>
    </div>
  );
}

export default Product;
