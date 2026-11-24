import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { handleHashClick } from "../../utils/handleHashClick";
import CustomButton from "../CustomButton/CustomButton";
import { motion, useInView } from "motion/react"
import { FaLinkedin, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";

const Header = () => {
    let [activeMenu, setActiveMenu] = useState(false);
    const handlerOuterLink = (url) => {
        setActiveMenu(activeMenu == true ? false : true);
        window.open(url, "_blank", "noopener,noreferrer");
    }

    // >>>>>>>>>> Needed to add the hash utils to the Header Links only
    const handlerMobileNav = (ev, hashVal) => {
        setActiveMenu(activeMenu == true ? false : true)
        handleHashClick(ev, hashVal)
    }

    let navLinkAnim = {
        initial: { opacity: 0, y: 30, rotate: 3 },
        whileInView: activeMenu ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 0, rotate: 0 },
        transition: { duration: 0.25, ease: "easeInOut" },
        viewport: {
            // amount: .15,
            // once: true
        }
    }


    return (
        <>
            <header
                className="site-header border-b border-[#d9d6cf] flex  w-full h-[70px]  bg-bg-offwhite fixed top-0  " >

                <div className="container flex justify-between items-center ">

                    <Link
                        to="/#home"
                        onClick={(e) => handleHashClick(e, "/#home")}
                        className=" brand-logo flex items-center gap-[10px] z-[9999]  "  >

                        <span
                            className={` ${activeMenu ? "bg-text-light-white" : "bg-text-dark-black"} 
                         ${activeMenu ? "text-text-dark-black" : "text-text-light-white"} 
                         brand-logo-sticker  font-dm-serif font-semibold text-[14px]/[20px] w-8 h-8 flex items-center justify-center  `} >MT</span>

                        <span className={` 
                            ${activeMenu ? "text-text-light-white" : "text-text-dark-black"}  
                             font-dm-serif font-semibold text-[18px]/[22px] tracking-[1px] `} >Mohammed Talib</span>

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
                        className=" tab:hidden block"  ></button>


                    {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>> MOBILE NAV */}
                    <nav
                        data-active-menu={activeMenu}
                        className=" mobile-nav bg-bg-chocolate  tab:hidden  flex flex-col  justify-start items-center gap-[30px]  " >

                        <div className="mob-nav-links  flex flex-col items-center gap-[30px]  "  >

                            <div className=" overflow-hidden " >
                                <motion.div
                                    {...navLinkAnim}
                                    className=" "  >
                                    <Link
                                        to="/#home"
                                        onClick={(e) => handlerMobileNav(e, '/#home')}
                                        className=" font-menu-links  "   >Home</Link>
                                </motion.div>
                            </div>

                            <div className=" overflow-hidden " >
                                <motion.div
                                    {...navLinkAnim}
                                    transition={{ duration: .25, ease: "easeInOut", delay: .05 }}
                                    className=""   >
                                    <Link
                                        to="/#about"
                                        onClick={(e) => handlerMobileNav(e, '/#about')}
                                        className=" font-menu-links " >About</Link>
                                </motion.div>
                            </div>

                            <div className=" overflow-hidden " >
                                <motion.div
                                    {...navLinkAnim}
                                    transition={{ duration: .25, ease: "easeInOut", delay: .15 }}
                                    className=" "   >
                                    <Link
                                        to="/#projects"
                                        onClick={(e) => handlerMobileNav(e, '/#projects')}
                                        className=" font-menu-links "   >Projects</Link>
                                </motion.div>
                            </div>

                            <div className=" overflow-hidden " >
                                <motion.div
                                    {...navLinkAnim}
                                    transition={{ duration: .25, ease: "easeInOut", delay: .25 }}
                                    className=" "   >
                                    <Link
                                        to="/#contact"
                                        onClick={(e) => handlerMobileNav(e, '/#contact')}
                                        className=" font-menu-links "  >Contact</Link>
                                </motion.div>
                            </div>

                            <div className=" overflow-hidden " >
                                <motion.div
                                    {...navLinkAnim}
                                    transition={{ duration: .25, ease: "easeInOut", delay: .35 }}
                                    className=" "  >
                                    <button
                                        onClick={() => handlerOuterLink("https://cal.com/mohammed-talib-dev")}
                                        className=" font-menu-links flex items-center gap-3 "  >
                                        Book a Call <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" z-[99] w-[28px] h-[28px] -rotate-45 " >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>
                                    </button>
                                </motion.div>
                            </div>

                        </div>


                        <div className="mob-contact-nav-info flex flex-col items-center gap-4   ">

                            <div className="line w-12 h-[1px] bg-text-light-white  " ></div>

                            <motion.p
                                initial={{ opacity: 0, y: 15, rotate: 2 }}
                                whileInView={activeMenu ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 0, rotate: 0 }}
                                transition={{ duration: .25, ease: "easeInOut", delay: .25 }}
                                className=" text-text-light-white uppercase text-[14px]/[20px] tracking-[2px] relative flex " >
                                Get in Touch
                            </motion.p>

                            <div className=" overflow-hidden " >
                                <motion.div
                                    {...navLinkAnim}
                                    transition={{ duration: .25, ease: "easeInOut", delay: .35 }}
                                    className="contact-info flex items-center gap-8 "  >
                                    <button
                                        onClick={() => handlerOuterLink("mailto:shaikhtalib2705@gmail.com")}
                                        className=" font-manrope text-[14px]/[20px] font-normal text-[#f6f3eea6] hover:text-accent cursor-pointer "
                                    >
                                        <span  className=" flex items-center gap-3 " >
                                            <span>shaikhtalib2705@gmail.com</span>
                                        </span>
                                    </button>

                                    <div className="social-icons flex gap-3 ">
                                        <button
                                            onClick={() => handlerOuterLink("https://api.whatsapp.com/send?phone=+919987034815")}
                                            className=" font-manrope text-[14px]/[20px] font-normal text-[#f6f3eea6] "  > 
                                            <FaWhatsapp className=" mt-[2px] ml-[1px] text-[24px]/[24px]  text-[#f6f3eea6] hover:text-accent cursor-pointer  " />
                                        </button>

                                        <button
                                            onClick={() => handlerOuterLink("https://www.linkedin.com/in/shaikh-mohammed-talib-b45275222/")}
                                            className=" font-manrope text-[14px]/[20px] font-normal text-[#f6f3eea6] "  >
                                            <FaLinkedin className=" mt-[2px] ml-[1px] text-[22px]/[22px]  text-[#f6f3eea6] hover:text-accent  cursor-pointer " />
                                        </button>

                                    </div>

                                </motion.div>
                            </div>

                        </div>

                    </nav>

                </div>
            </header >
        </>
    )
}

export default Header;
