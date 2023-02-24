import classes from './ProductCard.module.css'

const ProductCard = ({productName, url, description, sizes, identifier, price}) => {
    return (
        <>
        <div className={classes.wrapper} identifier={identifier}>
            <h2>{productName}</h2>
            <div 
            className= {classes.pic}
            style={{background:`url(${url}) no-repeat center center/cover`, height:'100%', width:'100%',}}
            />
            <p>{description}</p>
            <p>Price: {price}$</p>
            <p>Available sizes: {sizes}</p>
        </div>
            
        </>
    )
}
export default ProductCard