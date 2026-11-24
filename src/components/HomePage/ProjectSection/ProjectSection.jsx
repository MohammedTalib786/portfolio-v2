import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Tabs } from "radix-ui";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProjectCard from "./ProjectCard";
import projectsData from '../../../projects.json';
import "./project_section.css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const ProjectSection = () => {
    const bottomTextRef = useRef(null);

    const isInView = useInView(bottomTextRef, {
        amount: .15,
        once: true
    });

    const [activeTab, setActiveTab] = useState("all-projects");
    let projectTab = [
        {
            name: "All Projects",
            slug: "all-projects"
        },
        {
            name: "WordPress",
            slug: "wordpress"
        },
        {
            name: "Shopify",
            slug: "shopify"
        },
        {
            name: "React",
            slug: "react"
        },
    ];

    const filteredProjects = projectsData.filter(elem => {
        if (activeTab === "all-projects") return true;

        if (activeTab === "wordpress") {
            return ["wordpress", "elementor", "woocommerce"].includes(
                elem.techStack.toLowerCase()
            );
        }

        return elem.techStack.toLowerCase() === activeTab;
    });


    return (
        <>
            <section className=" special border-t  border-border-color w-full desktop:py-28 tab:py-20 py-13 flex flex-col gap-16  " id="projects"   >

                <div className=" container  flex gt-tab:flex-row flex-col gt-tab:items-end items-start desktop:gap-10 gt-tab:gap-0 gap-7 ">

                    <div className=" gt-tab:w-[70%] w-full ">

                        <motion.div
                            initial="hidden"
                            whileInView={isInView ? "visible" : "hidden"}
                            viewport={{ amount: 0.25, once: true }}
                            className=" overflow-hidden"   >
                            <motion.span
                                variants={{
                                    hidden: { opacity: 0, y: 25 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                transition={{ duration: 0.75, delay: .25, ease: "easeInOut" }}
                                className=" font-slug text-accent "  >Selected Work</motion.span>
                        </motion.div>

                        <div className=" overflow-hidden mt-6 py-[12px] ">

                            <motion.h2
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: .75, ease: "easeInOut" }}
                                viewport={{ amount: .15, once: true }}
                                ref={bottomTextRef}
                                className=" font-h2 text-text-dark-black  " >Ideas, made <br className=" gt-tab:block hidden " />tangible.</motion.h2>

                        </div>

                    </div>

                    <div className=" gt-tab:w-[40%] tab:w-112 w-full overflow-hidden  ">

                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .75, delay: 0.45, ease: "easeInOut" }}
                            viewport={{ amount: .15, once: true }}
                            className=" font-para-norm text-text-dark-grey " >From e-commerce experiences to custom WordPress builds, each project explores a different side of web development through practical functionality and thoughtful execution.
                        </motion.p>

                    </div>

                </div>

                <div className=" projects container w-full " >

                    <Tabs.Root
                        value={activeTab}
                        onValueChange={setActiveTab} >

                        <Tabs.List aria-label="Filter projects" className="projTabList flex flex-wrap tab:gap-5 gap-3 " >
                            {
                                projectTab.map(elem => {
                                    return (
                                        <Tabs.Trigger
                                            key={elem.slug}
                                            value={elem.slug}
                                            className=" projTab "
                                        >{elem.name}</Tabs.Trigger>
                                    )
                                })
                            }
                        </Tabs.List>

                        <div className={` ${activeTab === "all-projects" ? "all-projects" : ""}  tab:pt-[50px] pt-10 tab:grid tab:grid-cols-[repeat(2,1fr)] tab:gap-x-7 tab:gap-y-16 hidden flex-col gap-10 `} >
                            {
                                filteredProjects.map(elem => {
                                    return (
                                        <ProjectCard
                                            key={elem.id}
                                            projectName={elem.projectName}
                                            shortDescription={elem.shortDescription}
                                            techStack={elem.techStack}
                                            slug={elem.slug}
                                            thumbnail={elem.thumbnail}
                                            projectURL={elem.projectURL}
                                        />
                                    );
                                })
                            }
                        </div>


                        {/* >>>>>>>>>>>>>>>>>>>>>>>>>> MOBILE SLIDER */}
                        <div className={` ${activeTab === "all-projects" ? "all-projects" : ""} mob-tab-list pt-[75px]  tab:hidden flex flex-col relative `} >

                            {/* <!-- Navigation arrows placed outside .swiper --> */}
                            <div
                                className={`absolute w-full h-fit flex justify-end gap-[14px] bottom-auto top-[28px] left-auto -right-[10px] ${filteredProjects.length <= 1 ? "invisible pointer-events-none" : ""}`}  >
                                <button
                                    type="button"
                                    className="swiper-button-prev custom-prev"
                                    disabled={filteredProjects.length <= 1}
                                    aria-label="Previous project"  >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="rotate-90 w-7 h-7" >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>

                                <button
                                    type="button"
                                    className="swiper-button-next custom-next"
                                    disabled={filteredProjects.length <= 1}
                                    aria-label="Next project"   >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="-rotate-90 w-7 h-7"   >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>
                            </div>

                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={40}
                                slidesPerView={1}
                                navigation={{
                                    nextEl: '.custom-next',
                                    prevEl: '.custom-prev',
                                }}
                                loop={true}
                                className=" w-full  "
                            >
                                {
                                    filteredProjects.map(elem => {
                                        return (
                                            <SwiperSlide>

                                                <ProjectCard
                                                    key={elem.id}
                                                    projectName={elem.projectName}
                                                    shortDescription={elem.shortDescription}
                                                    techStack={elem.techStack}
                                                    slug={elem.slug}
                                                    thumbnail={elem.thumbnail}
                                                    projectURL={elem.projectURL}
                                                />

                                            </SwiperSlide>
                                        );
                                    })
                                }
                            </Swiper>

                        </div>

                    </Tabs.Root>

                </div>

            </section>
        </>
    )
}

export default ProjectSection;
