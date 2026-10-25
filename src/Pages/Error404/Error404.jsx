import { motion } from "motion/react";
import CustomButton from '../../components/CustomButton/CustomButton';
import error_404_Ill from '../../assets/error_404_illustraion.png'
import useDocumentTitle from "../../hooks/useDocumentTitle";


const Error404 = () => {

  useDocumentTitle('404 Page Not Found — Mohammed Talib');

  return (
    <section className=" desktop:py-21 tab:py-20 py-13  min-h-[92vh] flex justify-center items-center  " >

      <div className=" container  flex gt-tab:flex-row flex-col-reverse gt-tab:gap-0 gap-10  " >

        <div className=" gt-tab:w-[60%] w-full flex flex-col justify-center gt-tab:items-start items-center  ">

          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{
              amount: .55,
              once: true
            }}

            className=" block font-slug text-accent ">404 Error</motion.span>

          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: "easeInOut" }}
            viewport={{
              amount: .55,
              once: true
            }}

            className=" font-dm-serif font-normal desktop:text-[76px]/[76px] tab:text-[60px]/[60px] text-[38px]/[42px]  text-text-dark-black  mt-[14px] gt-tab:text-left text-center   " >Looks like You&rsquo;re in the wrong place.</motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
            viewport={{
              amount: .55,
              once: true
            }}

            className="  w-full font-manrope font-medium text-[16px]/[24px] text-text-dark-grey  mt-[20px] gt-tab:mb-[24px] mb-[20px] gt-tab:text-left text-center  ">The page you&rsquo;re looking for doesn&rsquo;t exist or might have been removed.</motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: "easeInOut" }}
            viewport={{
              amount: .55,
              once: true
            }}

            className="" >

            <CustomButton
              as='Link'
              to="/"
              className="button button-primary "

            >Back To Home
            </CustomButton>

          </motion.div>

        </div>

        <div className=" gt-tab:w-[40%] w-full flex gt-tab:justify-end justify-center items-center  ">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.25, ease: "easeInOut" }}
            viewport={{
              amount: .55,
              once: true
            }}

            className="" >

            <img src={error_404_Ill} alt="" className=' w-full desktop:max-w-105 tab:max-w-85 max-w-70 ' />

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default Error404;
