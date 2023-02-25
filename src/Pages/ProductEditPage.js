import { Link } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import classes from "../Pages/ProductEditPage.module.css";
import API from "../API";
import axios from "axios";

const ProductEditPage = () => {

  const [editedProduct, setEditedProduct] = useState({});
  const [isApproved, setIsApproved] = useState(false);

  const [nameInput, setNameInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')
  const [priceInput, setPriceInput] = useState('')
  const [sizeInput, setSizeInput] = useState('')
  const [urlInput, setUrlInput] = useState('')

  const params = useParams();

const editProduct = async (productID, product) => {
    try {
        const response = await axios.put(`https://63f8f6b21dc21d5465cbbfc1.mockapi.io/data/${productID}`, product)
        const data = response.data
        const fetched = await API.getProducts()
        localStorage.setItem("localStorageProducts",JSON.stringify(fetched))
    } catch (error) {
        console.log(error)
    }
}

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("localStorageProducts"));
    const foundProduct = products.find((prod) => prod.id === params.productID);
    setEditedProduct(foundProduct);
  }, []);


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

  const submitEditsHandler = async (e) => {
    e.preventDefault();
    setEditedProduct({
        id: editedProduct.id,
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
        console.log(editedProduct)
        editProduct(editedProduct.id, {title: nameInput,
            imageUrl: urlInput,
            description: descriptionInput,
            size: sizeInput,
            price: priceInput})
    }
},[isApproved])


  if (!isApproved) {
    return (
      <>
        <h1>Edit Product: </h1>
        <form onSubmit={submitEditsHandler}
          className={classes.form}
          identifier={editedProduct.id}
          id={editedProduct.id}
        >
          <ul className={classes.ul}>
            <li className={classes.li}>
                <label>Product ID: {editedProduct.id}</label>  
            </li>
            <li className={classes.li}>
              <label htmlFor="product-name">Product name: </label>
              <input
                className={classes.input}
                type="text"
                name="product-name"
                placeholder={editedProduct.title}
                onChange={inputChangeHandler}
              />
            </li>
            <li className={classes.li}>
              <label htmlFor="image-url">Image Url: </label>
              <input
                className={classes.input}
                type="text"
                name="image-url"
                placeholder={editedProduct.imageUrl}
                onChange={inputChangeHandler}
              />
            </li>
            
            <li className={classes.li}>
              <label htmlFor="price">Price: </label>
              <input
                className={classes.input}
                type="number"
                name="price"
                placeholder={editedProduct.price}
                onChange={inputChangeHandler}
              ></input>
            </li>
            <li className={classes.li}>
              <label htmlFor="sizes">Sizes: </label>
              <input
                className={classes.input}
                name="sizes"
                type="text"
                placeholder={editedProduct.size}
                onChange={inputChangeHandler}
              ></input>
            </li>
            <li>
              <label htmlFor="description">Description: </label>
              <input
                className={classes.input}
                name="description"
                placeholder={editedProduct.description}
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
        <h1>Your changes were saved</h1>
          <p>
          Go back to <Link to="/products/">Products page</Link>
        </p>
      </>
    );
  }
};

export default ProductEditPage;
