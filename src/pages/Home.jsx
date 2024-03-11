import "../index.css";
import foto from "../assets/foto-personal-web.png";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const noSelectElements = document.querySelectorAll(".no-select")

    noSelectElements.forEach((element) => {
      element.style.webkitUserSelect = "none"
      element.style.mozUserSelect = "none"
      element.style.msUserSelect = "none"
      element.style.userSelect = "none"
    })
  }, [])
  return (
    <div className="flex flex-col justify-center w-full h-screen font-asap no-select">
      <Navbar />
      <div className="flex md:flex-row justify-end flex-col items-center md:pt-0 pt-40">
        <img className="w-[10rem] h-[13rem] photo-small" alt="personal-small-screen" src={foto}/>
        <div className="flex px-20 md:pb-0 pb-6 md:text-left text-center md:text-xl text-lg md:pt-[5.7rem] pt-5 gap-5 md:justify-end justify-center">
          <NavLink to={'/last-projects'} className="text-gray-700 blur-0 hover:text-orange-500 hover:blur-[1px] transition-all ease-in-out duration-300">Last Projects</NavLink>
          <NavLink to={'/'} className="text-gray-700 blur-0 hover:text-orange-500 hover:blur-[1px] transition-all ease-in-out duration-300">Let&apos;s connect</NavLink>
        </div>
      </div>
      <div className="flex flex-row md:px-20 px-10">
        <img className="w-[27rem] h-[30rem] photo-big" alt="personal-medium-screen" src={foto}/>
        <div className="flex flex-col justify-center w-full">
          <h2 className="md:text-3xl text-2xl font-semibold text-gray-900">Welcome,</h2>
          <p className="text-gray-800 md:text-2xl text-sm text-justify pb-3">
            My expertise spans both front-end and back-end technologies,
            allowing me to create seamless and responsive applications. I am
            enthusiastic about leveraging my skills to contribute to impactful
            projects and collaborate with dynamic teams.
          </p>
          <NavLink to={'/'} className="text-gray-700 hover:text-orange-500 transition-all underline underline-offset-2 md:text-xl text-sm">See more about me</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
