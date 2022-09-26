import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Basket from "./pages/Basket";

function App() {
  const [products, setProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [basketProducts, setBasketProducts] = useState([]);
  const [inputText, setInputText] = useState("");

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputText.toLowerCase());
  });

  const searchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setInputText(searchValue);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });

  const handleClickFavorite = (product) => {
    if (favoriteProducts.find((item) => item.id === product.id)) {
      alert("Already added to favorite");
    } else {
      setFavoriteProducts([...favoriteProducts, product]);
    }
  };

  const handleClickBasket = (product) => {
    if (basketProducts.find((item) => item.id === product.id)) {
      alert("Already added to basket");
    } else {
      setBasketProducts([...basketProducts, product]);
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar searchChange={searchChange} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                setProducts={setProducts}
                handleClickFavorite={handleClickFavorite}
                handleClickBasket={handleClickBasket}
                filteredProducts={filteredProducts}
              />
            }
          />
          <Route
            path="/favorite"
            element={
              <Favorite
                favoriteProducts={favoriteProducts}
                setFavoriteProducts={setFavoriteProducts}
              />
            }
          />
          <Route
            path="/basket"
            element={
              <Basket
                basketProducts={basketProducts}
                setBasketProducts={setBasketProducts}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
