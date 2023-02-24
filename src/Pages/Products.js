import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import data from "../Data";
import ProductCard from "../Components/ProductCard";
import SearchBar from "../Components/SearchBar";

const Products = () => {
  const [products, setProducts] = useState(data);
  const [currentProducts, setCurrentProducts] = useState(data);
  const inputRef = useRef(null);

  const searchHandler = (searchInput) => {
    setCurrentProducts(searchInput);
  };

  //focusing on search bar when starting
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <h1>Our Products</h1>

      <SearchBar
        products={products}
        inputRef={inputRef}
        onInputChange={searchHandler}
      />

      <div className="products-container">
        {currentProducts.map((product) => {
          return (
            <ProductCard
              key={product.id}
              identifier={product.id}
              productName={product.title}
              url={product.imageUrl}
              description={product.description}
              price={product.price}
              sizes={product.size}
            />
          );
        })}
      </div>
      <p>
        Go back to <Link to="/">Home</Link>
      </p>
    </>
  );
};
export default Products;