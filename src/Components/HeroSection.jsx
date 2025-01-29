import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function HeroSection() {
    return(
        <>
        <div className="main-container px-2 sm:px-18 pt-14 font-white">   
            <div className="">    
        <div className = "about-container ">
        <p className="text-normal text-lg sm:text-2xl md:text-2xl lg:text-3xl font-bold text-orange-600">YASH VARDHAN NAUTIYAL</p>
        <div className="text-6xl sm:text-6xl md:text-8xl font-bold">
        <p className="text-white">WEBSITE</p>
        <p className="font-color1">DEVELOPER</p>
        </div>
        </div>
        <p className="text-gray-400 pt-2 w-full sm-w-xl md:w-3xl font-medium text-normal md:text-lg">
            <span className="text-white">Passionate about creating intuitive and engaging user experiences.</span>I'm a website developer and designer based in <span className="text-white">India</span>, passionate about delivering high-quality websites and applications.</p>
        </div>

        
        </div>
{/* 
        <div className = "logocontainer font-color2">
        <div className="flex font-color2 py-3 space-x-5 text-2xl font-extrabold">
        <FaXTwitter /> 
        <FaLinkedinIn />
        <IoMail />

        </div>

            
        </div> */}
        </>
    )
}

export default HeroSection;