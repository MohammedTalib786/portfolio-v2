import { Link } from "react-router-dom";
import CustomButton from "../../CustomButton/CustomButton";


const ProjectCard = ({
    projectName,
    shortDescription,
    techStack,
    slug,
    thumbnail,
    projectURL
}) => {

    return (
        <>
            <article
                className=" projCard w-full relative  "  >

                <Link
                    to={`/projects/${slug}`}
                    title="View Project Details"
                    className=" w-full h-full absolute block z-10  " >
                </Link>

                <div className=" projImg ">
                    <img src={thumbnail} className=" w-full  " />
                </div>

                <div className=" mt-4 pt-4 border-t border-bg-chocolate flex gt-tab:flex-row flex-col   ">

                    <div className=" w-full ">
                        <span className=" font-slug text-accent  " >{techStack}</span>
                        <h4 className=" mt-2  font-h4 text-text-dark-black   " >{projectName}</h4>
                        <p className=" mt-3 text-text-dark-grey font-manrope font-normal text-[14px]/[24px] " >{shortDescription}</p>
                    </div>

                    <div className=" min-w-10 w-auto relative " >
                        <a
                            href={projectURL}
                            target='_blank'
                            rel="noopener noreferrer"
                            className=" arrow-btn min-w-10 max-w-10 w-full h-10 gt-tab:flex hidden justify-center items-center relative z-20  "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" w-4 h-4  -rotate-45  ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </a>

                        <div className="toolTip gt-tab:block hidden bg-accent text-text-light-white absolute text-nowrap  px-[18px] py-[6px]   " >
                            View Live Project
                        </div>

                        <CustomButton
                            as="Link"
                            to={`/projects/${slug}`}
                            className=" still_icon arrow-btn-mobile gt-tab:hidden! flex! button button-secondary mt-5 w-fit z-20 "
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" z-[99] w-4 h-4  -rotate-45  ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>}
                        >View Details
                        </CustomButton>


                        <CustomButton
                            href={projectURL}
                            target='_blank'
                            rel="noopener noreferrer"
                            className=" still_icon arrow-btn-mobile gt-tab:hidden! flex! button button-primary mt-3 w-fit relative z-20 "
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" z-[99] w-4 h-4  -rotate-45  ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>}
                        >View Live Project
                        </CustomButton>

                    </div>

                </div>

            </article>
        </>
    )
}

export default ProjectCard;
