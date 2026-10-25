import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Lenis from "lenis"
import { FadeUpAnimProvider } from "./context/fadeUpAnimProvider"
import Home from "./Pages/Home/Home"
import Projects from "./Pages/Projects/Projects"
import Error404 from "./Pages/Error404/Error404"
import Layout from "./components/Layout"
import ScrollToHash from "./components/ScrollToHash/ScrollToHash"


const App = () => {

  // >>>>>>>>>>>>>>>> Initialize Lenis (Smooth Scroll Library)
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
      smoothTouch: true,
      duration: 2,
      autoRaf: false,
    });

    let animationFrame;

    const raf = (time) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    window.lenis = lenis;

    return () => {
      cancelAnimationFrame(animationFrame); // ✅ Clean up
      lenis.destroy();
    };
  }, []);
  // >>>>>>>>>>>>>>>>>>> ENDS Initialize LENIS


  // >>>>>>>>>>>>>>>>>>> Framer Animation 
  let fadeUpAnim = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeInOut" },
    viewport: {
      // margin: "-30px",
      amount: .55,
      once: true,
    }
  }
  // >>>>>>>>>>>>>>>>>>> ENDS Framer Animation 


  return (
    <>
      <FadeUpAnimProvider value={{ fadeUpAnim }} >

        <ScrollToHash />

        <Routes>

          <Route path="/" element={<Layout />}  >

            <Route index element={<Home />} />

            <Route path="/projects/:slug" element={<Projects />} />

            <Route path="*" element={<Error404 />} />

          </Route>

        </Routes>

      </FadeUpAnimProvider>
    </>
  )
}

export default App;
