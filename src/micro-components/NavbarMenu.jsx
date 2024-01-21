/* eslint-disable react/prop-types */
const NavbarMenu = ({pathHref, pathWindow, pathName}) => {
  return (
    <>
      <a className="flex-col justify-between" href={pathHref}>
        <div className="bg-gray-400 h-1 invisible"></div>
        <div className={`font-expletus md:text-xl text-md ${pathWindow === pathHref ? "text-orange-500 py-5" : "text-black"} hover:text-orange-500 transition-all`}>
          {pathName}
        </div>
        <div className={`${pathWindow === pathHref ? "bg-orange-500 h-1.5 rounded-xl" : "invisible h-1.5 rounded-xl"}`}></div>
      </a>
    </>
  );
};

export default NavbarMenu;
