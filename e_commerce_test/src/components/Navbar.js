import React, { useState } from "react";
import { Link } from "react-router-dom";
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "../styles/navbar.css";

function Navbar({ inputText, setInputText, searchChange }) {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <input
        type="text"
        placeholder="Ürünün ismini girin"
        value={inputText}
        onChange={() => searchChange}
      />
      <div className="favorite">
        <Link to="/favorite">Favorite</Link>
      </div>
      <div className="basket">
        <Link to="/basket">Basket</Link>
      </div>
    </div>
  );
}

export default Navbar;
