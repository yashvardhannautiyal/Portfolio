import { RiHome2Line } from "react-icons/ri";
import { GoFileDirectory } from "react-icons/go";
import { FiTool } from "react-icons/fi";
import { MdOutlineContacts } from "react-icons/md";

//calling scroll function here
function Navbar({ scroll, homeRef, skillsRef, projectsRef, contactRef }) {
  return (
    <>
      <div className="nav-bg flex space-x-4 py-2 items-center justify-center text-white  text-sm sm:text-normal rounded-2xl w-xs font-medium fixed top-6 ">
        <div
          className="flex-row items-center justify-items-center hover:text-orange-600 hover:cursor-pointer"
          onClick={() => scroll(homeRef)}
        >
          <RiHome2Line />
          <p>Home</p>
        </div>
        <div
          className="flex-row items-center justify-items-center hover:text-orange-600 hover:cursor-pointer"
          onClick={() => scroll(skillsRef)}
        >
          <FiTool />
          <p>Skills</p>
        </div>
        <div
          className="flex-row items-center justify-items-center hover:text-orange-600 hover:cursor-pointer"
          onClick={() => scroll(projectsRef)}
        >
          <GoFileDirectory />
          <p>Projects</p>
        </div>
        <div
          className="flex-row items-center justify-items-center hover:text-orange-600 hover:cursor-pointer"
          onClick={() => scroll(contactRef)}
        >
          <MdOutlineContacts />
          <p>Contact</p>
        </div>
      </div>
    </>
  );
}
export default Navbar;
