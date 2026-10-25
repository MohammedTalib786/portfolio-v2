import { useState } from "react";
import { Link } from "react-router-dom";
import { handleHashClick } from "../../utils/handleHashClick";
import CustomButton from "../CustomButton/CustomButton";


const Header = () => {

    let [activeMenu, setActiveMenu] = useState(false)

    const handlerBookCall = () => {
        setActiveMenu(activeMenu == true ? false : true);
        window.open("https://cal.com/mohammed-talib-dev", "_blank", "noopener,noreferrer");
    }

    // >>>>>>>>>> Needed to add the hash utils to the Header Links only
    const handlerMobileNav = (ev, hashVal) => {
        setActiveMenu(activeMenu == true ? false : true)
        handleHashClick(ev, hashVal)
    }

    return (
        <>
            <header
                className="site-header border-b border-[#d9d6cf] flex  w-full h-[70px]  bg-bg-offwhite fixed top-0  ">

                <div className="container flex justify-between items-center ">

                    <Link
                        to="/#home"
                        onClick={(e) => handleHashClick(e, "/#home")}
                        className=" brand-logo flex items-center gap-[10px] "  >
                        <span className=" brand-logo-sticker  bg-text-dark-black text-text-light-white font-dm-serif font-semibold text-[14px]/[20px] w-8 h-8 flex items-center justify-center  " >MT</span>
                        <span className=" text-text-dark-black font-dm-serif font-semibold text-[18px]/[22px] " >Mohammed Talib</span>
                    </Link>

                    <nav className=" hidden tab:flex items-center gt-tab:gap-8 gap-6  "  >

                        <Link
                            to="/#home"
                            onClick={(e) => handleHashClick(e, "/#home")}
                            className=" font-menu-links " >Home</Link>

                        <Link
                            to="/#about"
                            onClick={(e) => handleHashClick(e, "/#about")}
                            className=" font-menu-links "  >About</Link>

                        <Link
                            to="/#projects"
                            onClick={(e) => handleHashClick(e, "/#projects")}
                            className=" font-menu-links " >Projects</Link>

                        <Link
                            to="/#contact"
                            onClick={(e) => handleHashClick(e, "/#contact")}
                            className=" font-menu-links " >Contact</Link>

                        <CustomButton
                            href="https://cal.com/mohammed-talib-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button button-primary still_icon "
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" z-[99] w-4 h-4 -rotate-45 " >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>}
                        >
                            Book a Call
                        </CustomButton>

                    </nav>



                    {/* >>>>>>>>??????????????????>>>>>>>>> Mobile Nav Starts */}

                    {/* >>>>>>>>??????????????????>>>>>>>>> Mobile Nav Btn Icon */}
                    <button
                        data-active-menu={activeMenu}
                        onClick={() => setActiveMenu(activeMenu == true ? false : true)}
                        id="navIcon"
                        className=" tab:hidden block "  ></button>


                    {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>> Mobile Nav */}
                    <nav data-active-menu={activeMenu} className=" mobile-nav bg-bg-offwhite tab:hidden flex absolute  top-0 left-auto right-0 bottom-auto  flex-col justify-center items-start px-[30px] gap-10  "  >

                        <Link
                            to="/#home"
                            onClick={(e) => handlerMobileNav(e, '/#home')}
                            className=" font-menu-links "   >Home</Link>

                        <Link
                            to="/#about"
                            onClick={(e) => handlerMobileNav(e, '/#about')}
                            className=" font-menu-links " >About</Link>

                        <Link
                            to="/#projects"
                            onClick={(e) => handlerMobileNav(e, '/#projects')}
                            className=" font-menu-links "   >Projects</Link>

                        <Link
                            to="/#contact"
                            onClick={(e) => handlerMobileNav(e, '/#contact')}
                            className=" font-menu-links "  >Contact</Link>

                        <CustomButton
                            as="button"
                            className="button button-primary still_icon "
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" z-[99] w-6 h-6 -rotate-45 " >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>}
                            onClick={handlerBookCall}
                        >
                            Book a Call
                        </CustomButton>

                    </nav>

                </div>
            </header >
        </>
    )
}

export default Header;
