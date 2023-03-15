import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
    return <>
        <Navbar />
        <div style={{ marginTop: '70px' }}>
            <Outlet />
        </div>

    </>
}

export default RootLayout;