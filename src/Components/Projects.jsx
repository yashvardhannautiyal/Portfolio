import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import ProjectList from "../ProjectList";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

function Projects() {

  // visible project functionality
  const [visible, setvisible] = useState(3); //intially shown projects 3

  const handleView = () =>{
    setvisible(ProjectList.length); //show all projects
  }
  return (
    <div className="projects-container mt-16 text-white">
      <div className="font-bold text-4xl sm:text-6xl md:text-8xl">
        <p className="text-white flex justify-center">RECENT</p>
        <p className="font-color1 flex justify-center">PROJECTS</p>
      </div>
      <div className="card-container mt-6 flex flex-col items-center justify-center
       transition-all duration-10000 ease-in-out">
        {ProjectList.slice(0,visible).map((project, index) => (
          <div
            key={project.id}
            className="card background2 p-2 sm:p-5 mb-10 w-xs sm:w-3xl items-center rounded-xl"
          >
            <img
              src={project.image}
              alt={project.name}
              className="rounded-2xl"
            />
            <h1 className="font-bold text-normal sm:text-xl mt-2">{project.name}</h1>

            <p className="font-medium mt-1">
              Tech stack : <span className="font-color2">{project.stack}</span>
            </p>
            <p className="description font-color2 sm:text-lg font-medium">
              {project.description}
            </p>

            <div className="link-container flex gap-6 mt-3 sm:mt-0 sm:text-3xl justify-end">
              <a href={project.gitLink} target="_blank">
                <FaGithub className="hover:text-amber-600" />
              </a>
              <a href={project.liveLink} target="_blank">
                <IoIosLink className="hover:text-orange-600" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* view more button  */}
      <div className="font-color2 flex justify-center">
      {visible < ProjectList.length && (
        <button 
        onClick={handleView}
        className="background flex items-center gap-0.5 hover:cursor-pointer">
        View more <IoIosArrowDown />
      </button> 
      )
      }
      </div>
      
    </div>
  );
}
export default Projects;
