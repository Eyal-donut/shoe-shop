import classes from './ProductCard.module.css'
import { Link } from 'react-router-dom'
import API from '../API'

const ProductCard = ({products, productName, url, description, sizes, identifier, price, onDeleteClick}) => {

    const clickHandler = async (e) => {
        await API.deleteProduct(e.target.id)
        const filteredProducts = products.filter((prod)=> {
            return prod.id !== e.target.id
        })
        onDeleteClick(filteredProducts)
    }

    return (
        <>
        <div className={classes.wrapper} identifier={identifier} id={identifier}>
            <h2>{productName}</h2>
            <div 
            className= {classes.pic}
            style={{background:`url(${url}) no-repeat center center/cover`, height:'100%', width:'100%',}}
            />
            <p>Description: {description}</p>
            <p>Price: {price}$</p>
            <p>Available sizes: {sizes}</p>
            <div className={classes.buttonsWrap}>
                <Link to={`edit/${identifier}`}><button id={identifier} className={classes.button}>Edit</button></Link>
                <button onClick={clickHandler} id={identifier} className={classes.button}>Delete</button>
            </div>
        </div>
            
        </>
    )
}
export default ProductCard