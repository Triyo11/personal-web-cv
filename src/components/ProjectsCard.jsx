/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const ProjectsCard = ({ image, title, desc, role, date, techs, view, link }) => {
  return (
    <div className="p-6 mx-32 bg-gray-300 flex gap-4 rounded-2xl">
      <img className="w-[50%] max-h-[15rem] rounded-md" src={image} />
      <div className="flex flex-col justify-evenly">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        <p className="text-lg text-justify leading-tight text-gray-700">
          {desc}
        </p>
        <div>
          <p className="text-gray-900 font-semibold">Role:</p>
          <ul className="list-disc pl-[1.2rem] text-gray-900">
            {role.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <p className="text-gray-900">Date: <span>{date}</span></p>
        <p className="text-gray-900">Tech stack: <span>{techs.join(", ")}</span></p>
        <p className="text-gray-900 font-semibold">View: <span>
          <ul className="flex gap-2">
            {view.map((item, index) => (
              <li key={index} className="text-orange-500 p-1">{item}</li>
            ))}
          </ul>
          </span>
        </p>
        <NavLink to={link} className="p-2 mt-2 bg-orange-500 text-white max-w-max rounded-lg">Visit Website</NavLink>
      </div>
    </div>
  );
};

export default ProjectsCard;
