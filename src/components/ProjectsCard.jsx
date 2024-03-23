import PropTypes from "prop-types";

const ProjectsCard = ({
  image,
  title,
  desc,
  role,
  date,
  techs,
  view,
  link,
}) => {
  const handleDirectProjectWebsite = () => window.open(link, "_blank");

  return (
    <div className="p-6 md:mx-32 mx-5 bg-gray-300 grid md:grid-cols-2 grid-cols-1 gap-2 rounded-2xl">
      <img
        className="md:w-[95%] w-full md:h-[80%] h-[10rem] rounded-md"
        alt="project-sample"
        src={image}
      />
      <div className="flex flex-col justify-evenly">
        <h2 className="md:text-2xl text-xl font-semibold text-gray-900">
          {title}
        </h2>
        <div className="md:text-lg text-md">
          <p className="md:text-lg text-md leading-tight text-justify text-gray-900">
            {desc}
          </p>
          <div className="pt-3">
            <p className="text-gray-900 md:text-lg text-md font-semibold">Role:</p>
            <ul className="list-disc pl-[1.2rem] md:text-lg text-md text-gray-900">
              {role.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <p className="text-gray-900 pt-3">
            Date: <span>{date}</span>
          </p>
          <p className="text-gray-900 pt-3">
            Tech stack: <span>{techs.join(", ")}</span>
          </p>
          <div className="flex gap-2 items-center pt-3 font-semibold">
            <p className="text-gray-900">View: </p>
            <ul className="flex gap-1">
              {view.map((item) => (
                <li key={item} className="text-gray-900 p-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button
          onClick={() => setTimeout(handleDirectProjectWebsite, 500)}
          className="p-2 mt-2 bg-gray-900 text-white md:max-w-max w-full rounded-lg ring-2 ring-offset-4 ring-gray-900 ring-offset-gray-300 hover:ring-0 hover:ring-offset-0 hover:scale-110 hover:shadow-xl hover:shadow-black/50 transition-all ease-in-out duration-300"
        >
          Visit Website
        </button>
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
  link: PropTypes.string,
};

export default ProjectsCard;
