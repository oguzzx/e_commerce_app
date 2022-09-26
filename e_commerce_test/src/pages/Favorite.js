import React from "react";
import "../styles/favoriteProducts.css";

function Favorite({ favoriteProducts, setFavoriteProducts }) {
  const handleRemoveFaviroite = (id) => {
    setFavoriteProducts(favoriteProducts.filter((item) => item.id !== id));
  };
  return (
    <div>
      {favoriteProducts.map((product) => {
        return (
          <div className="favoriteProducts">
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
              <button onClick={() => handleRemoveFaviroite(product.id)}>
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Favorite;
