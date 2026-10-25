import HeroSection from "../../components/HomePage/HeroSection/HeroSection";
import AboutSection from "../../components/HomePage/AboutSection/AboutSection";
import ProjectSection from "../../components/HomePage/ProjectSection/ProjectSection";
import ContactSection from "../../components/HomePage/ContactSection/ContactSection";
import useDocumentTitle from "../../hooks/useDocumentTitle";


const Home = () => {

  // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
  useDocumentTitle('Mohammed Talib — WordPress & Front-End Developer');

  return (
    <>
      <HeroSection />

      <AboutSection />

      <ProjectSection />

      <ContactSection />
    </>
  )
}

export default Home;
