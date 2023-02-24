import classes from "./SearchBar.module.css";
import React, { useRef } from "react";

const SearchBar = ({ products, inputRef, onInputChange }) => {

  const inputHandler = (e) => {
    console.log(products);
    const currentProducts = products.filter((prod) => {
      const productDetails = (
        prod.title +
        String(prod.id) +
        String(prod.price) +
        prod.size +
        prod.description
      ).toLowerCase();
      return productDetails.includes(e.target.value.toLowerCase());
    });
    console.log(e.target.value);
    onInputChange(currentProducts);
  };

  return (
    <div className={classes.searchBarWrap}>
      <label htmlFor="search">Search Product</label>
      <input
        className={classes.input}
        name="search"
        type="text"
        ref={inputRef}
        onChange={inputHandler}
        placeholder='Name / description / price / size / id'
      />
    </div>
  );
};

export default SearchBar;
