import { Link } from 'react-router-dom'
import React, { useEffect, useState, useRef } from "react";
import classes from "../Pages/AddProductPage.module.css";
import API from "../API";

const AddProductPage = () => {
    const [newProduct, setNewProduct] = useState({});
    const [isApproved, setIsApproved] = useState(false);
  
    const [nameInput, setNameInput] = useState('')
    const [descriptionInput, setDescriptionInput] = useState('')
    const [priceInput, setPriceInput] = useState('')
    const [sizeInput, setSizeInput] = useState('')
    const [urlInput, setUrlInput] = useState('')

    const addProduct = async (product) => {
        await API.addProduct(product)
        const fetched = await API.getProducts()
        localStorage.setItem("localStorageProducts",JSON.stringify(fetched))
    }

const inputChangeHandler = (e) => {
    if (e.target.name === "product-name") {
        setNameInput(e.target.value)
    }
    if (e.target.name === "image-url") {
      setUrlInput(e.target.value);
    }
    if (e.target.name === "description") {
      setDescriptionInput(e.target.value);
    }
    if (e.target.name === "price") {
      setPriceInput(e.target.value);
    }
    if (e.target.name === "sizes") {
      setSizeInput(e.target.value);
    }
  };

  const submitsHandler = (e) => {
    e.preventDefault();
    setNewProduct({
        title: nameInput,
        imageUrl: urlInput,
        description: descriptionInput,
        size: sizeInput,
        price: priceInput
    })
    setIsApproved(true);
};

useEffect(()=> {
    if(isApproved) {
        addProduct(newProduct)
    }
},[isApproved])

    
if (!isApproved) {
    return (
      <>
        <h1>Fill out product details: </h1>
        <form onSubmit={submitsHandler}
          className={classes.form}
          identifier={newProduct.id}
          id={newProduct.id}
        >
          <ul className={classes.ul}>
            <li className={classes.li}>
              <label htmlFor="product-name">Product name: </label>
              <input
                className={classes.input}
                type="text"
                name="product-name"
                onChange={inputChangeHandler}
              />
            </li>
            <li className={classes.li}>
              <label htmlFor="image-url">Image Url: </label>
              <input
                className={classes.input}
                type="text"
                name="image-url"
                onChange={inputChangeHandler}
              />
            </li>
            
            <li className={classes.li}>
              <label htmlFor="price">Price: </label>
              <input
                className={classes.input}
                type="number"
                name="price"
                onChange={inputChangeHandler}
              ></input>
            </li>
            <li className={classes.li}>
              <label htmlFor="sizes">Sizes: </label>
              <input
                className={classes.input}
                name="sizes"
                type="text"
                onChange={inputChangeHandler}
              ></input>
            </li>
            <li>
              <label htmlFor="description">Description: </label>
              <input
                className={classes.input}
                name="description"
                onChange={inputChangeHandler}
              />
            </li>
          </ul>
          <button
            className={classes.button}
            type="submit"
          >
            Save changes
          </button>
        </form>
        <p>
          Go back to <Link to="/products/">Products page</Link>
        </p>
      </>
    );
  } 
  if(isApproved) {
    return (
      <>
        <h1>New product saved</h1>
          <p>
          Go back to <Link to="/products/">Products page</Link>
        </p>
      </>
    );
  }
};

export default AddProductPage