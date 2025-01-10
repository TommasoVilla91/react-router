import { Outlet } from "react-router-dom"
import AppHeader from "./AppHeader";

function AdminLayout() {

    return (
        <>
            <AppHeader />
            <Outlet />
        </>
    )
}

export default AdminLayout;