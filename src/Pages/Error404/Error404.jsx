import { motion } from "motion/react";
import CustomButton from '../../components/CustomButton/CustomButton';
import SEO from "../../components/SEO/SEO";
import ScrollToTopFunc from "../../components/ScrollToTopFunc/ScrollToTopFunc";
import error_404_Ill from '../../assets/error_404_illustraion.png'


const Error404 = () => {

  return (
    <>
      <SEO
        title="Page Not Found — Mohammed Talib"
        description="The page you're looking for couldn't be found. Return to home page to explore projects and learn more about my work."
        noIndex={true} />

      <ScrollToTopFunc />

      <section className=" desktop:py-21 tab:py-20 py-13  min-h-[92vh] flex justify-center items-center  " >

        <div className=" container  flex gt-tab:flex-row flex-col-reverse gt-tab:gap-0 gap-10  " >

          <div className=" gt-tab:w-[60%] w-full flex flex-col justify-center gt-tab:items-start items-center  ">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="overflow-hidden" >
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.75, ease: "easeInOut" }}
                className=" block font-slug text-accent "   >404 Error</motion.span>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="overflow-hidden py-[14px] "  >
              <motion.h3
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.75, delay: .15, ease: "easeInOut" }}
                className=" font-dm-serif font-normal desktop:text-[76px]/[76px] tab:text-[60px]/[60px] text-[38px]/[42px]  text-text-dark-black   gt-tab:text-left text-center   "    >
                Looks like You&rsquo;re in the wrong place.
              </motion.h3>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="overflow-hidden w-full mt-4 gt-tab:mb-[24px] mb-5 "  >
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.75, delay: .3, ease: "easeInOut" }}
                className="  font-manrope font-medium text-[16px]/[24px] text-text-dark-grey   gt-tab:text-left text-center  "    >
                The page you&rsquo;re looking for doesn&rsquo;t exist or might have been removed.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="overflow-hidden "  >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.75, delay: .45, ease: "easeInOut" }}
                className="   "    >
                <CustomButton
                  as='Link'
                  to="/"
                  className="button button-primary "
                >Back To Home
                </CustomButton>
              </motion.div>
            </motion.div>

          </div>


          <div className=" gt-tab:w-[40%] w-full flex gt-tab:justify-end justify-center items-center  ">

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.25, ease: "easeInOut" }}
              viewport={{ amount: .15, once: true }}
              className="" >

              <img src={error_404_Ill} alt="404 label illustration" className=' tab:w-full w-[60vw] desktop:max-w-105 tab:max-w-85  max-w-70  ' />

            </motion.div>

          </div>

        </div>

      </section>

    </>
  )
}

export default Error404;
