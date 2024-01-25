import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import { CaretCircleLeft } from "@phosphor-icons/react/dist/ssr";
import ProjectsCard from "../components/ProjectsCard";

import bookoe from "../assets/bookoe-app.png";
import arita from "../assets/arita-app.png";

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
      {/* <div className="flex px-20 md:pt-[5.7rem] pt-[12rem] gap-5 justify-start">
        <NavLink
          to={"/"}
          className="hover:text-orange-500 transition duration-500"
        >
          <CaretCircleLeft size={40} weight="fill" />
        </NavLink>
      </div> */}
      <div className="flex justify-center md:text-3xl text-xl md:pt-[5.7rem] pt-[14rem] font-semibold text-gray-700 md:pb-10 pb-5">
        My Last Projects
      </div>
      <div className="flex flex-col gap-5 pb-10">
        <ProjectsCard
          image={bookoe}
          title={"'Bookoe' - Book App"}
          desc={
            "Web application that displays a list of books. There are dashboard, latest, top picks, search and book details pages."
          }
          role={[
            "Consume and slicing data from API",
            "Implement design use React and TailwindCSS",
            "Handle route of web app",
          ]}
          date={"January 2023 - Now"}
          techs={["NodeJs", "React", "TailwindCSS"]}
          view={["Desktop"]}
          link={"https://bookoe-book-app.vercel.app/"}
        />
        <ProjectsCard
          image={arita}
          title={"'Arita' - News App"}
          desc={
            "Web application that displays a list of news titles and their images from several news sources that can be accessed directly from the application."
          }
          role={[
            "Consume and slicing data from API",
            "Implement design use React and TailwindCSS",
            "Make a responsive design for desktop and mobile",
            "Handle route of web app",
          ]}
          date={"November 2023 - Now"}
          techs={["NodeJs", "React", "TailwindCSS"]}
          view={["Desktop", "Mobile"]}
          link={"https://arita-app.vercel.app/"}
        />
      </div>
    </div>
  );
};

export default Projects;
