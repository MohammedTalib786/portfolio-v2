import { useParams } from "react-router-dom";
import CtaComp from "../../components/CTA_Section/CtaComp";
import ContactFormSect from "../../components/ContactFormSect/ContactFormSect";
import ScrollToTopFunc from "../../components/ScrollToTopFunc/ScrollToTopFunc";
import ProjectInfo from "../../components/ProjectPage/ProjectInfo/ProjectInfo";
import TechInfo from "../../components/ProjectPage/TechInfo/TechInfo";
import projectsData from '../../projects.json'
import Error404 from "../Error404/Error404";
import SEO from "../../components/SEO/SEO";


const Projects = () => {


    let { slug } = useParams();
    let project = projectsData.find(elem => elem.slug === slug);

    // console.log('project', project)

    if (!project) {
        return <Error404 />
    }


    return (
        <>

            <SEO
                title={project?.metaTitle}
                description={project?.metaDescription}
                path={`projects/${project?.slug}`}
            />


            <ScrollToTopFunc />

            <ProjectInfo project={project} />

            <TechInfo project={project} />

            <CtaComp />

            <ContactFormSect />
        </>
    )
}

export default Projects;
