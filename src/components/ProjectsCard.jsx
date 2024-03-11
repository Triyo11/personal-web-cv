import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

const ProjectsCard = ({ image, title, desc, role, date, techs, view, link }) => {

  return (
    <div className="p-6 md:mx-32 mx-5 bg-gray-300 flex md:flex-row flex-col gap-4 rounded-2xl">
      <img className="md:w-[50%] w-full md:h-[17rem] h-[10rem] rounded-md" alt='project-sample' src={image} />
      <div className="flex flex-col justify-evenly">
        <h2 className="md:text-2xl text-xl font-semibold text-gray-900">{title}</h2>
        <p className="md:text-lg text-md text-justify leading-tight text-gray-700">
          {desc}
        </p>
        <div className="pt-3">
          <p className="text-gray-900 font-semibold">Role:</p>
          <ul className="list-disc pl-[1.2rem] text-gray-900">
            {role.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <p className="text-gray-900 pt-3">Date: <span>{date}</span></p>
        <p className="text-gray-900 pt-3">Tech stack: <span>{techs.join(", ")}</span></p>
        <p className="text-gray-900 font-semibold pt-3">View: <span>
          <ul className="flex gap-2">
            {view.map((item) => (
              <li key={item} className="text-orange-500 p-1">{item}</li>
            ))}
          </ul>
          </span>
        </p>
        <NavLink to={link} target={"_blank"} className="p-2 mt-2 bg-orange-500 text-white max-w-max rounded-lg">Visit Website</NavLink>
      </div>
    </div>
  );
};

ProjectsCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,  
  desc: PropTypes.string,
  role: PropTypes.array,
  date: PropTypes.string,
  techs: PropTypes.array,
  view: PropTypes.array,
  link: PropTypes.string
}

export default ProjectsCard;
