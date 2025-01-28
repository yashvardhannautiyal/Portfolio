import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";

function App() {
  

  return (
    <>
    {/* navbar  */}
    <div className="main-container">
    <div className="p-4 flex items-center justify-center">
    <Navbar />
    </div>

    {/* hero-section  */}
    <HeroSection />
      
      </div>
    </>
  )
}

export default App
