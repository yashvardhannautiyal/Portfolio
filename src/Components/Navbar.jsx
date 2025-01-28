import { RiHome2Line } from "react-icons/ri";
import { GoFileDirectory } from "react-icons/go";
import { FiTool } from "react-icons/fi";
import { MdOutlineContacts } from "react-icons/md";

function Navbar() {
    return(
        <>
        <div className="nav-bg flex space-x-4 py-2 items-center justify-center text-white rounded-2xl w-xs font-medium">
            <div className="flex-row items-center justify-items-center hover:text-gray-300 hover:cursor-pointer">
            <RiHome2Line />
            <p>Home</p>
            </div>
            <div className="flex-row items-center justify-items-center hover:text-gray-300 hover:cursor-pointer">
            <GoFileDirectory />
            <p>Projects</p>
            </div>
            <div className="flex-row items-center justify-items-center hover:text-gray-300 hover:cursor-pointer">
            <FiTool />
            <p>Tools</p>
            </div>
            <div className="flex-row items-center justify-items-center hover:text-gray-300 hover:cursor-pointer">
            <MdOutlineContacts />
            <p>Contact</p>
            </div>
            
        </div>
        </>
    )
}
export default Navbar;