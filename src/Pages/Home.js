import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <>
            <h1>Random Stuff Shop - shop management app</h1>
            <p className='go-to'>
            Go to <Link to="products/">Products</Link>
            </p>
        </>
    )
}
export default Home