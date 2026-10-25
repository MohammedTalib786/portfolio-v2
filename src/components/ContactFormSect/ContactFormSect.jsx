import { FaGithub, FaInstagram, FaLinkedin, FaRegEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import ContactForm from './ContactForm'


const ContactFormSect = () => {

    return (

        <section className="contact-form w-full desktop:py-28 tab:py-20 py-13 " id="contact-form"  >

            <div className=" container flex gap-14 gt-tab:flex-row flex-col ">

                <div className=" gt-tab:w-[40%] w-full flex flex-col  " >
                    <p className=" font-slug text-accent  " >Contact details</p>

                    <div className=" pt-6 mt-8  border-t border-bg-chocolate "  >

                        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Email */}
                        <a href="mailto:shaikhtalib2705@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-links relative mb-7 flex items-center justify-between  "  >
                            <div className=" flex items-center gap-2  ">
                                <FaRegEnvelope className=" mt-[2px] ml-[1px] text-[18px]/[18px] text-text-dark-black " />
                                <span className=" block font-manrope tab:text-[16px]/[24px] text-[14px]/[20px] font-semibold text-text-dark-black "  >Email</span>
                            </div>

                            <span
                                className=" contact-links flex items-center gap-2  font-manrope tab:text-[16px]/[24px] text-[14px]/[20px] font-semibold text-text-dark-black " >
                                shaikhtalib2705@gmail.com
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" mt-1 w-4 h-4 -rotate-45 text-text-dark-black " >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                        </a>

                        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> X.com */}
                        <a href="https://x.com/STalib01786"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-links relative mb-7 flex items-center justify-between  "  >
                            <div className=" flex items-center gap-2  ">
                                <FaXTwitter className=" mt-[2px] text-[20px]/[20px] text-text-dark-black " />
                                <span className=" block font-manrope tab:text-[16px]/[24px] text-[14px]/[20px] font-semibold text-text-dark-black "  >X.com</span>
                            </div>

                            <span
                                className=" contact-links flex items-center gap-2  font-manrope tab:text-[16px]/[24px] text-[14px]/[20px] font-semibold text-text-dark-black " >
                                @STalib01786
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" mt-1 w-4 h-4 -rotate-45 text-text-dark-black " >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                        </a>

                        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> GitHub */}
                        <a href="https://github.com/MohammedTalib786"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-links relative mb-7 flex items-center justify-between  "  >
                            <div className=" flex items-center gap-2  ">
                                <FaGithub className=" mt-[2px] text-[20px]/[20px] text-text-dark-black " />
                                <span className=" block font-manrope tab:text-[16px]/[24px] text-[14px]/[20px] font-semibold text-text-dark-black "  >GitHub</span>
                            </div>

                            <span
                                className=" contact-links flex items-center gap-2  font-manrope tab:text-[16px]/[24px] text-[14px]/[20px] font-semibold text-text-dark-black " >
                                @MohammedTalib786
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" mt-1 w-4 h-4 -rotate-45 text-text-dark-black " >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                        </a>

                        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> LinkedIn */}
                        <a href="https://www.linkedin.com/in/shaikh-mohammed-talib-b45275222/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-links relative mb-7 flex items-center justify-between  "  >
                            <div className=" flex items-center gap-2  ">
                                <FaLinkedin className=" mt-[1px] text-[18px]/[18px] text-text-dark-black " />
                                <span className=" block font-manrope tab:text-[16px]/[24px] text-[14px]/[20px] font-semibold text-text-dark-black "  >LinkedIn</span>
                            </div>

                            <span
                                className=" contact-links flex items-center gap-2  font-manrope tab:text-[16px]/[24px] text-[14px]/[20px] font-semibold text-text-dark-black " >
                                /in/shaikh-mohammed-talib
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" mt-1 w-4 h-4 -rotate-45 text-text-dark-black " >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                        </a>

                        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Instagram */}
                        <a href="https://www.instagram.com/_talib__shaikh/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-links relative mb-7 flex items-center justify-between  "  >
                            <div className=" flex items-center gap-2  ">
                                <FaInstagram className=" mt-[2px] text-[20px]/[20px] text-text-dark-black " />
                                <span className=" block font-manrope tab:text-[16px]/[24px] text-[14px]/[20px] font-semibold text-text-dark-black "  >Instagram</span>
                            </div>

                            <span
                                className=" contact-links flex items-center gap-2  font-manrope  tab:text-[16px]/[24px] text-[14px]/[20px]  font-semibold text-text-dark-black " >
                                @_talib__shaikh
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" mt-1 w-4 h-4 -rotate-45 text-text-dark-black " >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                        </a>

                    </div>

                    <p className=" gt-tab:mt-10 mt-5 font-manrope font-normal text-[14px]/[24px] text-text-dark-grey " >
                        A rough idea, a stubborn problem, or a question worth exploring — all are good places to start.
                    </p>

                </div>

                <div className=" form gt-tab:w-[60%] w-full  ">
                    <ContactForm />
                </div>

            </div>

        </section>
    )
}

export default ContactFormSect;
