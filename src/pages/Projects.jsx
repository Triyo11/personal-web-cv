import { useEffect } from "react";
import Navbar from "../components/Navbar";
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
      <div className="flex justify-center bg-[#E9E9E5] md:text-3xl text-xl md:pt-20 pt-[14rem] md:pb-5 pb-5 font-semibold text-gray-700">
        My Last Projects
      </div>
      <div className="flex flex-col gap-5 pt-5 pb-10">
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
