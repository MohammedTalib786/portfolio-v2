import { motion } from "motion/react";
import CustomButton from "../../CustomButton/CustomButton";


const HeroSection = () => {

    return (

        <section className=" special hero container w-full h-full min-h-[90vh]  " id="home" >
            <div className=" desktop:py-28 tab:py-20 py-13 ">

                <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{
                        amount: .55,
                        once: true
                    }}

                    className=" font-slug text-accent "
                >Wordpress & Front-end Developer
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.15, ease: "easeInOut" }}
                    viewport={{
                        amount: .55,
                        once: true
                    }}

                    className=" font-hero-sect-title tab:mt-8 mt-5 text-text-dark-black " >I build websites <br className=" gt-tab:block hidden " />with clarity, <br className=" gt-tab:block hidden " />character <span className=" text-accent ">&amp; care.</span></motion.h1>

                <div className=" tab:mt-10 mt-[25px]  " >
                    <div className=" gt-tab:w-125 tab:w-100 w-full ml-auto mr-0 ">

                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.65, ease: "easeInOut" }}
                            viewport={{
                                amount: .55,
                                once: true
                            }}

                            className=" font-para-norm text-text-dark-grey " >From custom WordPress themes to React-powered interfaces, I build responsive websites that balance thoughtful design with practical functionality.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                            viewport={{
                                amount: .55,
                                once: true
                            }}

                            className=" flex tab:flex-row flex-col gap-3 tab:mt-8 mt-5  ">

                            <CustomButton
                                as="Link"
                                to="#projects"
                                className="button button-primary "

                            >Explore Projects
                            </CustomButton>

                            <CustomButton
                                as="Link"
                                to="#contact"
                                className="button button-secondary "
                                icon=""
                            >Get in Touch
                            </CustomButton>

                        </motion.div>

                    </div>
                </div>

            </div>
        </section>

    )
}

export default HeroSection;
