import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import GetRequiredLogo from "./Logos";

const ProjectCard = ({
  imgUrl,
  title,
  desp,
  sourceLink,
  techStacks,
  status,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="lg:w-96 w-72 relative rounded-md border dark:bg-black border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-300 dark:shadow-sm dark:shadow-black flex-shrink-0 m-5 hover:scale-110 transition-transform z-10"
      data-aos="zoom-in"
    >
      <div className="absolute top-3 right-3">
        <p className="bg-blue-700 text-white rounded-full text-xs px-3 py-1">
          {status}
        </p>
      </div>
      <div className=" w-full ">
        <img
          src={imgUrl}
          alt="netflix clone"
          className="rounded-t-md border-b border-gray-200 dark:border-gray-700 lg:h-44 w-full h-20 object-cover"
          loading="lazy"
        />
      </div>

      <div className="pb-10 px-3">
        {/* title */}
        <p className="lg:text-2xl text-lg py-3 font-semibold dark:text-gray-100">
          {title}
        </p>
        {/* desp */}
        <p className="lg:text-sm text-xs line-clamp-3 font-light dark:text-gray-100">
          {desp}
        </p>

        {/* Technologies used */}
        <div className="py-5 flex flex-row items-center lg:space-x-3 space-x-1">
          {techStacks.map((stack, index) => (
            <GetRequiredLogo logoName={stack} key={index} size={25} />
          ))}
        </div>

        <div className="flex flex-row items-center justify-evenly lg:mt-4 mt-2">
          <a href={sourceLink} target="_blank" title={title}>
            <div className=" bg-blue-500 text-gray-100 py-2 px-7 rounded-full text-xs">
              View
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
