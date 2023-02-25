import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import ProductCard from "../Components/ProductCard";
import SearchBar from "../Components/SearchBar";
import classes from "./Products.module.css";
import API from "../API";
import Spinner from "../Components/Spinner";

const Products = () => {

    //!################################### Use State #######################################

  const [products, setProducts] = useState(() => {
    const localStorageProducts = localStorage.getItem("localStorageProducts");
    if (localStorageProducts) {
      return JSON.parse(localStorageProducts);
    } else return [];
  });

  const [currentProducts, setCurrentProducts] = useState(products);
  const [isNoProducts, setIsNoProducts] = useState(false);
  const [noProductsMsg, setNoProductsMsg] = useState("");
  const [isSpinnerActive, setSpinnerActive] = useState(false)


  const inputRef = useRef(null);

  //! ################################# Aid Functions ##################################

  const getProducts = async () => {
    const localStorageProducts = localStorage.getItem("localStorageProducts");
    if (!localStorageProducts) {
        setSpinnerActive(true)
        const data = await API.getProducts();
        setProducts(data);
        setCurrentProducts(data);
        setSpinnerActive(false)
    }
  };

  //!###################################### Handlers ###################################

  const searchHandler = (filteredBySearchInput) => {
    setCurrentProducts(filteredBySearchInput);
  };

  const deleteClickHandler = (productsFilteredByDelete) => {
    setCurrentProducts(productsFilteredByDelete);
    setProducts(productsFilteredByDelete);
  };

  //!################################### UseEffect ########################################
  
  //focusing on search bar when starting and fetching information when starting
  useEffect(() => {
    inputRef.current.focus();
    getProducts();
  }, []);

  //Updating the local storage every time the products change
  useEffect(() => {
    localStorage.setItem("localStorageProducts", JSON.stringify(products));
  }, [products]);

  //managing search results when there are none matched results
  useEffect(() => {
    if (currentProducts.length === 0) {
      setNoProductsMsg("There are no products that match your search.");
      setIsNoProducts(true);
    } else setIsNoProducts(false);
  }, [currentProducts]);

  useEffect(() => {
    if (products.length === 0) {
      setNoProductsMsg("There are no products in stock");
    }
  }, [products]);

  if (isSpinnerActive) {
    return (
      <>
        <h1>Our Products</h1>
        <Spinner/>
        <Link to="/products/add"><button className={classes.button}>Add new Product</button></Link> 
        <p className="go-to">
          Go back to <Link to="/">Home</Link>
        </p>
      </>
    )
  } else {
    return (
      <>
        <h1>Our Products</h1>
  
        <SearchBar
          products={products}
          inputRef={inputRef}
          onInputChange={searchHandler}
        />
        <div className={isNoProducts ? classes.show : classes.hide}>
          {noProductsMsg}
        </div>
  
        <div className="products-container">
          {currentProducts.map((product) => {
            return (
              <ProductCard
                products={products}
                onDeleteClick={deleteClickHandler}
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
        <Link to="/products/add"><button className={classes.button}>Add new Product</button></Link> 
        <p className="go-to">
          Go back to <Link to="/">Home</Link>
        </p>
      </>
    );
  }
};
export default Products;
