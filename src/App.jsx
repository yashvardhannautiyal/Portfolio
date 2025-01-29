import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import { useRef } from "react";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  // creating refs 
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // scroll function 
  const scroll = (ref) =>{
    if(ref.current){
      ref.current.scrollIntoView({behavior : "smooth"});
    }
  };
  

  return (
    <>
    {/* navbar  */}
    <div className="main-container">
    <div className="p-6 flex items-center justify-center">
    <Navbar 
    scroll = {scroll}
    homeRef = {homeRef}
    skillsRef = {skillsRef}
    projectsRef = {projectsRef}
    contactRef = {contactRef}

    />
    </div>

    {/* hero-section  */}
    <section ref={homeRef}>
    <HeroSection />
    </section>
    

    {/* skills  */}
    <section ref={skillsRef}>
    <Skills />
    </section>
    
    

    {/* projects  */}
    <section ref={projectsRef}>
    <Projects />
    </section>

    {/* contact  */}
    <section ref={contactRef}>
    <Contact />
    </section>

    {/* footer  */}
    <Footer />
    
      
      </div>
    </>
  )
}

export default App
