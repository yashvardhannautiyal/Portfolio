import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
function Contact(){
    return(
        <div className="projects-container mt-16">
        <div className="font-bold text-4xl sm:text-6xl md:text-8xl">
            <p className="text-white flex justify-center">LET'S WORK</p>
            <p className="font-color1 flex justify-center">TOGETHER</p>
        </div>
        <div className = "logocontainer text-orange-600 flex justify-center mt-14">
        <div className="flex py-3 gap-8 text-3xl font-extrabold">
        <FaXTwitter /> 
        <FaLinkedinIn />
        <IoMail />

        </div>
        </div>
        </div>
    )
}
export default Contact;