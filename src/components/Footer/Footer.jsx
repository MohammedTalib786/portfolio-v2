import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { FaGithub, FaInstagram, FaLinkedin, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { handleHashClick } from "../../utils/handleHashClick";


const Footer = () => {

    let currentYear = new Date().getFullYear();

    return (

        <footer className="footer py-15 w-full h-full bg-bg-chocolate " >

            <div className=" container ">

                <div className="footer-grid tab:grid tab:grid-cols-[2fr_1fr_1fr] flex flex-col tab:gap-0 gap-8  ">

                    <div className=" h-fit " >
                        <Link
                            to="/#home"
                            onClick={(e) => handleHashClick(e, "/#home")}
                            className=" block w-fit  "  >
                            <h3 className=" font-dm-serif font-normal text-[30px]/[36px] text-text-light-white ">Mohammed Talib</h3>
                        </Link>
                        <p className=" desktop:w-[60%] tab:w-[80%] w-full font-manrope text-[14px]/[20px] font-normal text-[#f6f3ee9c] mt-4 " >WordPress and front-end developer building thoughtful, responsive websites.</p>
                    </div>

                    <div className="footer-links h-fit ">
                        <h4 className=" font-slug text-[#f6f3ee78] " >Explore</h4>
                        <ul className=" flex flex-col gap-1 mt-[11px] " >

                            <li>
                                <Link
                                    to="/#about"
                                    onClick={(e) => handleHashClick(e, "/#about")}
                                    className=" font-manrope text-[14px]/[20px] font-normal text-[#f6f3eea6] " >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/#projects"
                                    onClick={(e) => handleHashClick(e, "/#projects")}
                                    className=" font-manrope text-[14px]/[20px] font-normal text-[#f6f3eea6] " >
                                    Projects
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/#contact"
                                    onClick={(e) => handleHashClick(e, "/#contact")}
                                    className=" font-manrope text-[14px]/[20px] font-normal text-[#f6f3eea6] " >
                                    Contact
                                </Link>
                            </li>

                        </ul>
                    </div>

                    <div className="footer-links h-fit ">
                        <h4 className=" font-slug text-[#f6f3ee78] " >Contact</h4>

                        <ul className=" flex flex-col gap-3 mt-[14px] " >
                            <li>
                                <a
                                    href="mailto:shaikhtalib2705@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=" font-manrope text-[14px]/[20px] font-normal text-[#f6f3eea6] "
                                >
                                    <span
                                        className=" flex items-center gap-3 " >
                                        <FaRegEnvelope className=" mt-[2px] ml-[1px] text-[18px]/[18px] text-[#f6f3eea6] " />
                                        <span>shaikhtalib2705@gmail.com</span>
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="tel:+919987034815"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=" font-manrope text-[14px]/[20px] font-normal text-[#f6f3eea6] "
                                >
                                    <span
                                        className=" flex items-center gap-2 " >
                                        <IoCallOutline className=" mt-[2px] ml-[1px] text-[22px]/[22px]  text-[#f6f3eea6] " />
                                        <span>+91 9987034815</span>
                                    </span>
                                </a>
                            </li>

                        </ul>

                        <h4 className=" font-slug text-[#f6f3ee78] mt-6 " >Socials</h4>
                        <ul className=" flex items-center gap-5 mt-[14px] " >

                            <li>
                                <a
                                    href="https://www.linkedin.com/in/shaikh-mohammed-talib-b45275222/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=" font-manrope text-[14px]/[20px] font-normal text-[#f6f3eea6] "  >
                                    <FaLinkedin className=" mt-[2px] ml-[1px] text-[22px]/[22px]  text-[#f6f3eea6] " />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://github.com/MohammedTalib786"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=" font-manrope text-[14px]/[20px] font-normal text-[#f6f3eea6] " >
                                    <FaGithub className=" mt-[2px] ml-[1px] text-[22px]/[22px]  text-[#f6f3eea6] " />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://x.com/STalib01786"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=" font-manrope text-[14px]/[20px] font-normal text-[#f6f3eea6] "  >
                                    <FaXTwitter className=" mt-[2px] ml-[1px] text-[22px]/[22px]  text-[#f6f3eea6] " />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.instagram.com/_talib__shaikh/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=" font-manrope text-[14px]/[20px] font-normal text-[#f6f3eea6] "  >
                                    <FaInstagram className=" mt-[2px] ml-[1px] text-[24px]/[24px]  text-[#f6f3eea6] " />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://api.whatsapp.com/send?phone=9987034815"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=" font-manrope text-[14px]/[20px] font-normal text-[#f6f3eea6] "  >
                                    <FaWhatsapp className=" mt-[2px] ml-[1px] text-[24px]/[24px]  text-[#f6f3eea6] " />
                                </a>
                            </li>
                        </ul>

                    </div>

                </div>


                <div className="footer-bottom pt-5 mt-14  border-t border-[#f6f3ee36] flex justify-between tab:flex-row flex-col tab:gap-0 gap-3  ">
                    <span className=" font-manrope text-[14px]/[20px] font-normal text-[#f6f3ee82] " >&copy; {currentYear} Mohammed Talib - Creative Developer</span>
                    <span className=" font-manrope text-[14px]/[20px] font-normal text-[#f6f3ee82] " >Designed with purpose. Built with care.</span>
                </div>

            </div>

        </footer>
    )
}

export default Footer;
