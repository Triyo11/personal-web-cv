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
      <div className="flex px-20 pt-[5.7rem] gap-5 justify-start">
        <NavLink
          to={"/"}
          className="hover:text-orange-500 transition duration-500"
        >
          <CaretCircleLeft size={40} weight="fill" />
        </NavLink>
      </div>
      <div className="flex justify-center text-3xl font-semibold text-gray-700 pb-10">
        My Last Projects
      </div>
      <div className="flex flex-col gap-5 pb-10">
        <ProjectsCard
          image={bookoe}
          title={"'Bookoe' - Book App"}
          desc={
            "Officia aliquip nisi quis proident deserunt in et in. Ea aliquip minim fugiat magna magna eu consequat fugiat. Do do Lorem labore irure est duis consectetur adipisicing fugiat nisi cillum velit ex occaecat. Aliquip non Lorem ut tempor nisi nisi veniam cillum officia aute nisi. Reprehenderit id pariatur voluptate occaecat. Laboris sunt ea adipisicing id esse proident veniam cupidatat nisi."
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
            "Enim laboris enim ipsum pariatur veniam eu ullamco. In deserunt culpa ipsum veniam. Fugiat ad labore adipisicing tempor velit aute tempor excepteur do culpa sit esse deserunt aute."
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
