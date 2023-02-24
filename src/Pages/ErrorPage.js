import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <>
            <main>
                <h1>Oops, an error has occurred!</h1>
                <p>That's not where you wanted to go... <br/>Could not find this page</p>
            </main>
            <p>
            Go back to <Link to='/'>Home page</Link>
            </p>
        </>
    )
}
export default ErrorPage