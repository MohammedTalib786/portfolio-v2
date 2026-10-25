import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import ScrollToTopBtn from "./ScrollToTopBtn/ScrollToTopBtn"


const Layout = () => {
    return (
        <>
            <Header />

            <main className="  mt-[70px] " >

                <Outlet />
                <ScrollToTopBtn />

            </main>

            <Footer />
        </>
    )
}

export default Layout;
