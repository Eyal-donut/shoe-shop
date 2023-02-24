import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <>
            <h1>Shoe Shop</h1>
            <p className='go-to'>
            Go to <Link to="products">Products</Link>
            </p>
        </>
    )
}
export default Home