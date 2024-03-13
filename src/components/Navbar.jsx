import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";

const handleOpenResume = (e) => {
  e.preventDefault();
  window.open("https://drive.google.com/file/d/13ZOCyfi2Y3BHAngZPEJil9bARB7QDbcj/view?usp=drive_link", "_blank");
}

const handleVisitIG = (e) => {
  e.preventDefault();
  window.open("https://www.instagram.com/triyo_11/", "_blank");
}

const handleVisitGithub = (e) => {
  e.preventDefault();
  window.open("https://github.com/Triyo11", "_blank");
}

const handleVisitLinkedIn = (e) => {
  e.preventDefault();
  window.open("https://www.linkedin.com/in/triyokrismantoro/", "_blank");
}

const Navbar = () => {
  return (  
    <div className="bg-[#E9E9E5] z-30 flex flex-wrap md:flex-row flex-col justify-between items-center fixed top-0 px-5 min-h-max w-full">
      <div className="flex md:flex-row md:gap-2 flex-col gap-0 items-center justify-center mb-2">
        <div className="md:text-3xl text-xl py-2 text-gray-700 font-expletus">Hi, I&apos;m</div>
        <div className="md:mt-2 mt-0 inline-flex h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul className="block animate-text-slide-2 md:text-3xl text-xl [&_li]:block md:text-left text-center">
            <li className="gradient-text-color font-bold pb-4">Triyo</li>
            <li className="gradient-text-color font-bold pb-4">a Fullstack Web Developer</li>
            <li aria-hidden="true" className="gradient-text-color font-bold">Triyo</li>
          </ul>
        </div>
      </div>
      <ul className="flex md:flex-row flex-col md:gap-0 gap-2 items-center">
        <li><button onClick={handleOpenResume} className="download-cv text-lg">Download CV</button></li>
        <ul className="flex items-center md:pr-0 pr-2">
          <li><button onClick={handleVisitIG} className="navbar-contact" aria-label="Instagram"><InstagramLogo size={32} weight="fill"/></button></li>
          <li><button onClick={handleVisitGithub} className="navbar-contact" aria-label="Github"><GithubLogo size={30} weight="fill"/></button></li>
          <li><button onClick={handleVisitLinkedIn} className="navbar-contact" aria-label="Linkedin"><LinkedinLogo size={30} weight="fill"/></button></li>
        </ul>
      </ul>
    </div>
  );
}

export default Navbar;