import { useRef } from "react";
import { motion, useInView } from "motion/react";
import ProjectCard from "./ProjectCard";
import projectsData from '../../../projects.json';
import "./project_section.css";


const ProjectSection = () => {

    const bottomTextRef = useRef(null);

    const isInView = useInView(bottomTextRef, {
        amount: .55,
        once: true
    });


    return (
        <>
            <section className=" special border-t  border-border-color w-full desktop:py-28 tab:py-20 py-13 " id="projects"   >

                <div className=" container  flex gt-tab:flex-row flex-col gt-tab:items-end items-start desktop:gap-10 gt-tab:gap-0 gap-7 ">

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
                                delay: .35,
                                ease: "easeInOut",
                            }}
                            viewport={{
                                amount: .55,
                                once: true
                            }}

                            className=" font-slug text-accent ">Selected Work</motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            viewport={{
                                amount: .55,
                                once: true
                            }}

                            ref={bottomTextRef}
                            className=" font-h2 text-text-dark-black mt-6 " >Ideas, made <br className=" gt-tab:block hidden " />tangible.</motion.h2>
                    </div>

                    <p className=" gt-tab:w-[40%] tab:w-112 w-full font-para-norm text-text-dark-grey ">From e-commerce experiences to custom WordPress builds, each project explores a different side of web development through practical functionality and thoughtful execution.</p>

                </div>

                <div className=" projects container w-full " >

                    <div className=" desktop:pt-20 gt-tab:pt-17 tab:pt-15 pt-10 tab:grid tab:grid-cols-[repeat(2,1fr)] tab:gap-x-7 tab:gap-y-16 flex flex-col gap-10 " >
                        {
                            projectsData.map(elem => {
                                return <ProjectCard
                                    key={elem.id}
                                    projectName={elem.projectName}
                                    shortDescription={elem.shortDescription}
                                    techStack={elem.techStack}
                                    slug={elem.slug}
                                    thumbnail={elem.thumbnail}
                                    projectURL={elem.projectURL}
                                />
                            })
                        }

                    </div>

                </div>

            </section>
        </>
    )
}

export default ProjectSection;
