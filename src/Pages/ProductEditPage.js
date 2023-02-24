import { Link } from 'react-router-dom'

const ProductEditPage = () => {
    return (
        <>
            <h1>Edit Product</h1>
            <p>
                Go back to <Link to='/products'>Products page</Link>
            </p>
        </>
    )}
export default ProductEditPage