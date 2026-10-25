import { motion } from "motion/react";
import useFancybox from '../../../hooks/useFancybox';
import CustomButton from '../../CustomButton/CustomButton';
import '../project_page.css'


const ProjectInfo = ({ project }) => {

  const [fancyboxRef] = useFancybox({
    // Your custom options
  });


  return (
    <>
      <section className=" container "  >

        <div className="  tab:py-20 py-13  flex flex-col  " >

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{
              amount: .55,
              once: true
            }}

            className="  font-dm-serif font-normal tab:text-[48px]/[48px] text-[36px]/[42px] text-text-dark-black " >
            {project.projectName}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: "easeInOut" }}
            viewport={{
              amount: .55,
              once: true
            }}

            className=" font-manrope font-normal gt-tab:text-[24px]/[34px] text-[18px]/[28px] text-text-dark-black my-6 " >
            {project.shortDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: "easeInOut" }}
            viewport={{
              amount: .55,
              once: true
            }}

            className=" flex w-full  "  >

            <CustomButton
              href={project.projectURL}
              target="_blank"
              rel="noopener noreferrer"
              className=" button button-primary still_icon "
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" z-[99] w-4 h-4 -rotate-45 " >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>}
            >
              View Live Project
            </CustomButton>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.65, ease: "easeInOut" }}
            viewport={{
              amount: .55,
              once: true
            }}

            className=" mt-15 mb-10 " ref={fancyboxRef}  >
            <a data-fancybox href={project.thumbnail} data-caption={`${project.projectName}&nbsp;&nbsp;|&nbsp;&nbsp;Project reference image`} >
              <img src={project.thumbnail} alt={`${project.projectName} reference image`} className='w-full  ' />
            </a>
          </motion.div>

          <p className=" font-manrope font-semibold tab:text-[24px]/[36px] text-[20px]/[34px] text-text-dark-black mb-3 " >
            About the project
          </p>

          <div className=" proj-full-desc-cont flex flex-col gap-2 " >

            <div className="space-y-3 ">
              {project.description.split("\n").map((paragraph, index) => (
                <p key={index} className=" font-manrope font-medium text-[16px]/[28px] text-text-dark-black  ">
                  {paragraph}
                </p>
              ))}
            </div>

          </div>

        </div>

      </section>
    </>
  )
}

export default ProjectInfo;
