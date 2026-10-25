import { useRef } from "react";
import { motion, useInView } from "motion/react"
import Accordian from "../../Accordian/Accordian";
import CustomButton from "../../CustomButton/CustomButton";
import './about_section.css';


const AboutSection = () => {

    let workProcessObj = [
        {
            id: 1,
            title: "Understand the goal",
            // title: "Discuss requirements",
            description: "Clarify the website's purpose, scope, and key requirements."
        },
        {
            id: 2,
            title: "Plan & estimate",
            description: "Define the content, structure, deliverables, and project scope upfront."
        },
        {
            id: 3,
            title: "Build & review",
            description: "Develop the website and refine its design and functionality through feedback."
        },
        {
            id: 4,
            title: "Test & refine",
            description: "Check responsiveness, accessibility, and performance; fix issues before launch."
        },
        {
            id: 5,
            title: "Deploy & support",
            description: "Launch the website and provide agreed post-launch support and maintenance."
        },
    ];

    const bottomTextRef = useRef(null);

    const isInView = useInView(bottomTextRef, {
        once: true,
        amount: .55,
    });

    return (
        <>
            <section
                className="about desktop:py-28 tab:py-20 py-13 w-full h-full bg-bg-chocolate " id="about" >

                <div
                    className=" container flex tab:flex-row flex-col tab:gap-0 gap-12 "  >

                    <div className=" desktop:w-[30%] tab:w-[35%] w-full    " >
                        <span className=" font-slug text-text-light-extra ">My Approach</span>
                        <div className=" font-dm-serif font-normal text-[250px]/[220px] text-accent mt-10 " >&lsquo;&lsquo;</div>
                    </div>

                    <div className=" desktop:w-[70%] tab:w-[65%] w-full  ">
                        <h2 className=" text-text-light-white font-dm-serif font-normal gt-tab:text-[48px]/[60px] text-[36px]/[45px]  " >The best websites feel inevitable: useful, expressive, and built around what people actually need.</h2>
                        <p className=" font-para-norm text-[#f6f3eea6] mt-7 desktop:w-[80%] w-full " >Good web experiences start with understanding their purpose not just how a page should look, but what people need to find, do, or understand. Design and development should work together to make that experience feel natural.</p>

                        <div
                            className=" mt-8 " >

                            <CustomButton
                                as="Link"
                                to="#projects"
                                className="button button-dark w-fit "
                            >
                                Explore Selected Work
                            </CustomButton>

                        </div>
                    </div>

                </div>

            </section>


            <section className=" special container w-full " >

                <div className=" desktop:py-28 tab:py-20 py-13 flex gt-tab:flex-row flex-col gt-tab:items-end items-start desktop:gap-10 gt-tab:gap-0 gap-10 " >

                    <div className=" gt-tab:w-[70%] w-full ">

                        <motion.span
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={
                                isInView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 50 }
                            }
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                delay: .35
                            }}
                            viewport={{
                                amount: .55,
                                once: true
                            }}

                            className=" origin-left block font-slug text-accent ">About</motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            viewport={{
                                amount: .55,
                                once: true
                            }}

                            ref={bottomTextRef}
                            className="  font-h2 text-text-dark-black mt-6 " >Curious by nature.<br />Precise by practice.</motion.h2>

                    </div>

                    <p className=" gt-tab:w-[30%] tab:w-112 w-full font-para-norm text-text-dark-grey ">I&rsquo;m a web developer based in Mumbai, focused on WordPress and front-end development. I build responsive websites, custom WordPress themes and WooCommerce stores, alongside React applications—bringing together thoughtful interfaces and practical functionality.</p>

                </div>

            </section >


            <section className=" w-full desktop:py-28 tab:py-20 py-13 border-t  border-border-color "  >

                <div className=" container flex tab:flex-row flex-col tab:gap-0 gap-12 ">

                    <span className=" font-slug text-text-dark-black gt-tab:w-[35%] tab:w-[40%] w-full " >Behind The Work</span>

                    <div className=" gt-tab:w-[75%] tab:w-[60%] w-full ">
                        <p className=" font-manrope font-normal tab:text-[24px]/[36px] text-[20px]/[34px] text-text-dark-black mb-6 " >What I enjoy most about development is turning ideas and requirements into working experiences. Whether I'm building dynamic WordPress content, refining a responsive layout or developing an interactive React interface, I like understanding how the pieces fit together and finding better ways to make them work. I continue to develop my skills through hands-on projects and experimentation.</p>
                    </div>

                </div>

            </section>


            <section className=" special  skills w-full desktop:py-28 tab:py-20 py-13  bg-bg-grey " >

                <div className=" container flex desktop:gap-10 gt-tab:gap-12 gt-tab:flex-row flex-col gap-10  ">

                    <div className="skills-heading desktop:w-[45%] gt-tab:w-[35%]  ">

                        <motion.span
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            viewport={{
                                amount: .55,
                                once: true
                            }}

                            className=" font-slug text-accent ">Tools &amp; technologies</motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeInOut", delay: .35 }}
                            viewport={{
                                amount: .55,
                                once: true
                            }}

                            className=" font-h3 text-text-dark-black mt-5 " >Useful tools, chosen <br className=" tab:block hidden " />with intent.</motion.h2>
                    </div>

                    <div className="skill-grid desktop:w-[55%] gt-tab:w-[65%]  " >
                        <Accordian />
                    </div>

                </div>

            </section>


            <section className="process desktop:py-28 tab:py-20 py-13 " >

                <div className=" container flex items-start flex-col " >
                    <span className=" font-slug text-accent  ">How I work</span>

                    <div className="process-grid mt-10 flex gt-tab:flex-nowrap tab:flex-wrap tab:w-auto w-full tab:flex-row flex-col  " >
                        {
                            workProcessObj.map(elem => {
                                return <article key={elem.id} className="process-step p-6  ">
                                    <h3 className=" font-dm-serif text-[36px]/[40px] font-normal text-accent " >0{elem.id}</h3>
                                    <strong className=" block tab:mt-16 mt-12 font-manrope text-[18px]/[26px] font-semibold text-text-dark-black "  >{elem.title}</strong>
                                    <p className=" mt-2 font-manrope text-[14px]/[20px] font-normal text-text-dark-grey  "  >{elem.description}</p>
                                </article>
                            })
                        }
                    </div>

                    <div
                        className="process-action mt-10  "  >

                        <CustomButton
                            as="Link"
                            to="#contact"
                            className="button button-secondary "  >
                            Discuss Your Project
                        </CustomButton>

                    </div>

                </div>

            </section>
        </>
    )
}

export default AboutSection;
