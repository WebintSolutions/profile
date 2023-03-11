import { Outlet } from "react-router-dom"
import ProfileHeader from "../header"

const Layout = () => {
    return (
        <>
            <ProfileHeader />
            <Outlet />
        </>
    )
}

export default Layout;