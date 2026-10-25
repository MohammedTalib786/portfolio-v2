import { useParams } from "react-router-dom";
import CtaComp from "../../components/CTA_Section/CtaComp";
import ContactFormSect from "../../components/ContactFormSect/ContactFormSect";
import ScrollToTopFunc from "../../components/ScrollToTopFunc/ScrollToTopFunc";
import ProjectInfo from "../../components/ProjectPage/ProjectInfo/ProjectInfo";
import TechInfo from "../../components/ProjectPage/TechInfo/TechInfo";
import ProjectNotFound from "../../components/ProjectPage/ProjectNotFound/ProjectNotFound";
import projectsData from '../../projects.json'
import useDocumentTitle from "../../hooks/useDocumentTitle";


const Projects = () => {


    let { slug } = useParams();
    let project = projectsData.find(elem => elem.slug == slug)

    if (!project) {
        return <ProjectNotFound />
    }
    
    useDocumentTitle(project.metaTitle);
    return (
        <>
            <ScrollToTopFunc />

            <ProjectInfo project={project} />

            <TechInfo project={project} />

            <CtaComp />

            <ContactFormSect />
        </>
    )
}

export default Projects;
