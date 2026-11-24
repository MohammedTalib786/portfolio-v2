import { useRef } from 'react'
import { motion, useInView } from "motion/react";
import '../project_page.css'

const TechInfo = ({ project }) => {

  let tech = project?.supportingTechnologies ?? [];

  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, });

  return (

    <section className="  desktop:py-21 tab:py-20 py-13 border-t border-border-color  "  >

      <div className="   container  flex flex-col desktop:gap-10 gt-tab:gap-12  gap-10  ">

        <div className="  " >

          <div className=" overflow-hidden mb-3  ">

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .75, ease: "easeInOut" }}
              viewport={{ once: true }}
              ref={textRef}
              className=" font-h3 text-text-dark-black  "  >Built with</motion.h2>

          </div>

          <motion.div
            initial="hidden"
            whileInView={isInView ? "visible" : "hidden"}
            viewport={{ once: true }}
            className="overflow-hidden w-full  "  >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.75, delay: .15, ease: "easeInOut" }}
              className="  font-medium font-para-norm text-text-dark-black "   >The core technology, supporting tools and integrations behind this project.</motion.p>
          </motion.div>

        </div>

        <div className=" flex tab:flex-row flex-col tab:gap-0 gap-10  " >

          <div className=" desktop:w-[30%] tab:w-[35%]  ">

            <p className=" mb-5 font-manrope font-bold uppercase text-[18px]/[26px] tracking-[0.12em]  text-accent  ">CORE TECHNOLOGY</p>

            <div className=" w-full  ">

              <img src={project?.techIcon} alt="Technology Logo" className=' react-img w-full max-w-[80px] ' />

              <strong className=" block mt-3 font-manrope text-[18px]/[26px] font-bold text-text-dark-black "  >{project?.techStack}</strong>
              <p className=" mt-1 font-manrope text-[16px]/[24px] font-normal text-text-dark-grey  "  >{project?.techStackRole}</p>

            </div>

          </div>


          <div className=" desktop:w-[70%] tab:w-[65%]  " >

            <p className=" mb-5 font-manrope font-bold uppercase text-[18px]/[26px] tracking-[0.12em]  text-accent  ">SUPPORTING TECHNOLOGIES</p>

            <div className="">
              {
                tech.map(elem => {
                  return (
                    <div key={elem.category.trim().toLowerCase().split(' ').join('-')} >
                      <p className=" block font-manrope text-[18px]/[26px] font-semibold text-text-dark-black "  >{elem.category}</p>
                      <ul className=' m-0 font-manrope gt-tab:text-[16px]/[24px] text-[14px]/[20px] font-normal pt-5 pb-[30px] flex flex-wrap items-center justify-start gap-x-4 gap-y-[22px] ' >
                        {elem.items.map((item, ind) => {
                          return <li key={ind}
                            className=' tech-chip  '
                          >{item}</li>
                        })}
                      </ul>
                    </div>
                  )
                })
              }
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default TechInfo;
