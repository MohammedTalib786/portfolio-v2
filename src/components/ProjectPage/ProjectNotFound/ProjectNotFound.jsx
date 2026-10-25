import { motion } from "motion/react";
import CustomButton from '../../CustomButton/CustomButton'
import magnifyingSearchIll from '../../../assets/magnifying_search_illustraion.png'
import useDocumentTitle from "../../../hooks/useDocumentTitle";


const ProjectNotFound = () => {

    useDocumentTitle('Project Not Found — Mohammed Talib');

    return (
        <section className="  desktop:py-21 tab:py-20 py-13  min-h-[92vh] flex justify-center items-center  "  >

            <div className="   container  flex flex-col desktop:gap-10 gt-tab:gap-12  gap-10  ">

                <div className=" w-full flex flex-col justify-center items-center   ">

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        viewport={{
                            amount: .55,
                            once: true
                        }}

                        className=""
                    >
                        <img src={magnifyingSearchIll} alt="" className=' w-full desktop:max-w-105 tab:max-w-95 max-w-75  ' />
                    </motion.div>

                    <motion.span
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.15, ease: "easeInOut" }}
                        viewport={{
                            amount: .55,
                            once: true
                        }}

                        className=" block font-slug text-accent mt-5 ">No Project Found</motion.span>

                    <motion.h3
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
                        viewport={{
                            amount: .55,
                            once: true
                        }}
                        className="  font-h3 text-text-dark-black text-center tab:mt-[18px] mt-[14px]  " >We couldn&rsquo;t find that project.</motion.h3>

                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.45, ease: "easeInOut" }}
                        viewport={{
                            amount: .55,
                            once: true
                        }}
                        className="  w-full font-manrope font-medium text-[16px]/[24px] text-text-dark-grey text-center tab:mt-[18px] tab:mb-5 mt-[22px] mb-[22px]  ">The link might be incorrect, the project may have been removed, <br className=' tab:block hidden  ' /> or it could be in a different category.</motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
                        viewport={{
                            amount: .55,
                            once: true
                        }}
                        className=""
                    >

                        <CustomButton
                            as='Link'
                            to="/#projects"
                            className="button button-primary "

                        >Back To All Projects
                        </CustomButton>

                    </motion.div>

                </div>
            </div>

        </section>
    )
}

export default ProjectNotFound;
