import { useState, useEffect } from 'react';
import './scrollToTopButton.css'


const ScrollToTopBtn = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsVisible(scrollTop > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <>
            <button
                className={` ${isVisible ? "onScrollBtn" : ""}
                opacity-0 pointer-events-none scrollToTopBtn bg-accent w-[35px] h-[35px] text-white flex justify-center items-center fixed z-[9999] cursor-pointer `}
                onClick={scrollToTop} >

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" -rotate-90 w-[20px] h-[20px]  ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </button>
        </>
    )
}

export default ScrollToTopBtn;
