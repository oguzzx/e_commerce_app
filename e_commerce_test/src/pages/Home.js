import React from "react";
import Product from "../components/Product";
import "../styles/home.css";

function Home({
  products,
  handleClickFavorite,
  handleClickBasket,
  filteredProducts,
}) {
  return (
    <div className="products">
      {products.map((product) => {
        return (
          <Product
            product={product}
            handleClickFavorite={handleClickFavorite}
            handleClickBasket={handleClickBasket}
          />
        );
      })}
    </div>
  );
}

export default Home;
