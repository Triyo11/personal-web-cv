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
      <div className="flex px-20 pt-[5.7rem] gap-5 justify-end">
        <NavLink to={'/last-projects'} className="text-xl text-orange-500 blur-0 hover:text-gray-500 hover:blur-[1px] transition-all">Last Projects</NavLink>
        <NavLink to={'/'} className="text-xl text-orange-500 blur-0 hover:text-gray-500 hover:blur-[1px] transition-all">Let&apos;s connect</NavLink>
      </div>
      <div className="flex flex-row px-20">
        <img className="w-[27rem] h-[30rem] foto" src={foto}/>
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-3xl font-semibold text-gray-900">Welcome,</h2>
          <p className="text-gray-800 md:text-2xl text-sm text-justify pb-3">
            My expertise spans both front-end and back-end technologies,
            allowing me to create seamless and responsive applications. I am
            enthusiastic about leveraging my skills to contribute to impactful
            projects and collaborate with dynamic teams.
          </p>
          <NavLink to={'/'} className="text-gray-700 hover:text-orange-500 transition-all underline underline-offset-2 text-xl">See more about me</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
