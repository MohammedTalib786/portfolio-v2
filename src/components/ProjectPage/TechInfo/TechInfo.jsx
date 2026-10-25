import React, { useEffect, useState } from 'react'

import '../project_page.css'

const TechInfo = ({ project }) => {


  let tech = project?.supportingTechnologies ?? [];

  // console.log('tech', tech)

  // tech.map(elem => {
  //   // console.log('elem', elem)

  //   // console.log('get cat', elem.category)
  //   // console.log('create id', elem.category.trim().toLowerCase().split(' ').join('-'))

  // })

  return (

    <section className="  desktop:py-21 tab:py-20 py-13 border-t border-border-color  "  >

      <div className="   container  flex flex-col desktop:gap-10 gt-tab:gap-12  gap-10  ">

        <div className="  " >

          <h2 className=" font-h3 text-text-dark-black mb-3 " >Built with</h2>
          <p className=" w-full font-medium font-para-norm text-text-dark-black " >The core technology, supporting tools and integrations behind this project.</p>

        </div>

        <div className=" flex tab:flex-row flex-col tab:gap-0 gap-10  " >

          <div className=" desktop:w-[30%] tab:w-[35%]  ">

            <p className=" mb-5 font-manrope font-bold uppercase text-[18px]/[26px] tracking-[0.12em]  text-accent  ">CORE TECHNOLOGY</p>

            <div className=" w-full  ">

              <img src={project.techIcon} alt="" className=' react-img w-full max-w-[80px] ' />

              <strong className=" block mt-3 font-manrope text-[18px]/[26px] font-bold text-text-dark-black "  >{project.techStack}</strong>
              <p className=" mt-1 font-manrope text-[16px]/[24px] font-normal text-text-dark-grey  "  >{project.techStackRole}</p>

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
