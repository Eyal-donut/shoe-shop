import MainNavigation from '../Components/MainNavigation'
import { Outlet } from 'react-router-dom'

const Root = () => {
    return (
        <>
            <MainNavigation/>
            <Outlet/>
        </>
    )
}
export default Root