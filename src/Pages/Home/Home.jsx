import HeroSection from "../../components/HomePage/HeroSection/HeroSection";
import AboutSection from "../../components/HomePage/AboutSection/AboutSection";
import ProjectSection from "../../components/HomePage/ProjectSection/ProjectSection";
import ContactSection from "../../components/HomePage/ContactSection/ContactSection";
import SEO from "../../components/SEO/SEO";


const Home = () => {


  return (
    <>

      <SEO 
        title="Mohammed Talib — WordPress & Front-End Developer"
        description="I'm Mohammed Talib, a Mumbai-based web developer focused on WordPress, custom themes, WooCommerce, and front-end development with React." 
        path="/"
      />

      <HeroSection />

      <AboutSection />

      <ProjectSection />

      <ContactSection />
    </>
  )
}

export default Home;
