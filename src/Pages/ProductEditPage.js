import { Link } from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import classes from '../Pages/ProductEditPage.module.css'

const ProductEditPage = () => {
    const [editedProduct, setEditedProduct] = useState({})

    const params = useParams()

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem("localStorageProducts"))
        const foundProduct = products.find((prod)=> prod.id === params.productID)
        setEditedProduct(foundProduct)
    }, []);


    const clickHandler = (e) => {
        e.preventDefault()
    }

    return (
      <>
          <h1>Edit Product: </h1>
              <form className={classes.form} identifier={editedProduct.id} id={editedProduct.id}>
                <ul className={classes.ul}>
                    <li className={classes.li}>
                        <label htmlFor='product-name'>Product name: </label>
                        <input className={classes.input} type='text' name='product-name' placeholder={editedProduct.title}/>
                    </li>
                    <li className={classes.li}>
                        <label htmlFor='image-url'>Image Url: </label>
                        <input className={classes.input} type='text' name='image-url' placeholder={editedProduct.imageUrl}/>
                    </li>
                    <li>
                        <label htmlFor='description'>Description: </label>
                        <input className={classes.input} name='description' placeholder={editedProduct.description}/>
                    </li>
                    <li className={classes.li}>
                        <label htmlFor='price'>Price: </label>
                        <input className={classes.input} type='number' placeholder={editedProduct.price}></input>
                    </li>
                    <li className={classes.li}>
                        <label htmlFor='sizes'>Sizes: </label>
                        <input className={classes.input} name='sizes' type='text' placeholder={editedProduct.size}></input>
                    </li>
                </ul>
                <button className={classes.button} type='submit' onClick={clickHandler}>Save changes</button>
              </form>
          <p>
              Go back to <Link to='/products'>Products page</Link>
          </p>
      </>
    )
}
    
    
export default ProductEditPage