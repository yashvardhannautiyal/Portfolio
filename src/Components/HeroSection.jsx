import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function HeroSection() {
    return(
        <>
        <div className="main-container px-20 pt-10 font-white flex justify-between">       
        <div className = "about-container">
        <p className=" text-3xl font-bold font-color2">YASH VARDHAN NAUTIYAL</p>
        <div className="text-9xl font-bold">
        <p className="text-white">WEBSITE</p>
        <p className="font-color1">DEVELOPER</p>
        </div>
        <p className="text-gray-400 w-3xl font-medium text-2xl">
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