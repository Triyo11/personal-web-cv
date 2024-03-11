import { useEffect } from "react";
import Navbar from "../components/Navbar";
import ProjectsCard from "../components/ProjectsCard";
import { dataProjects } from "../database/data-projects";

const Projects = () => {
  useEffect(() => {
    const noSelectElements = document.querySelectorAll(".no-select");
    noSelectElements.forEach((element) => {
      element.style.webkitUserSelect = "none";
      element.style.mozUserSelect = "none";
      element.style.msUserSelect = "none";
      element.style.userSelect = "none";
    });
  }, []);
  return (
    <div className="flex flex-col w-full h-screen font-asap no-select">
      <Navbar />
      <div className="flex justify-center bg-[#E9E9E5] md:text-3xl text-xl md:pt-20 pt-[14rem] md:pb-5 pb-5 font-semibold text-gray-700">
        My Last Projects
      </div>
      <div className="flex flex-col gap-5 pt-5 pb-10">
        {dataProjects.map((project) => {
          return (
            <ProjectsCard key={project.title} {...project} />
          )
        })}
      </div>
    </div>
  );
};

export default Projects;
