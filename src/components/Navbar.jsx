import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";

const Navbar = () => {
  return (  
    <>
      <div className="bg-[#E9E9E5] flex flex-wrap md:flex-row flex-col justify-between items-center fixed top-0 px-5 min-h-max w-full">
        <div className="text-3xl py-2 text-gray-700 font-expletus">Hi, I&apos;m <span className="inline-flex h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
            <ul className="block animate-text-slide-2 [&_li]:block">
              <li className="gradient-text-color font-bold text-3xl pb-4">Triyo</li>
              <li className="gradient-text-color font-bold text-3xl pb-4">a Fullstack Web Developer</li>
              <li aria-hidden="true" className="gradient-text-color font-bold text-3xl">Triyo</li>
            </ul>
          </span></div>
        <ul className="flex items-center">
          <li><button className="download-cv text-lg">Download CV</button></li>
          <li><button className="navbar-contact"><InstagramLogo size={32} weight="fill"/></button></li>
          <li><button className="navbar-contact"><GithubLogo size={30} weight="fill"/></button></li>
          <li><button className="navbar-contact"><LinkedinLogo size={30} weight="fill"/></button></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;