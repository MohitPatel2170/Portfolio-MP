import { Construction } from "@mui/icons-material";
import GetRequiredLogo from "./Logos";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ExperianceCard = ({
  role,
  roleType,
  companyName,
  location,
  duration,
  tStack,
  works,
  visitLink,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="w-5/6 md:w-3/4 lg:w-1/2 px-4 py-5 rounded-md border bg-white dark:bg-black dark:text-white border-gray-100 dark:border-gray-700 shadow-md shadow-gray-300 dark:shadow-sm dark:shadow-black m-5 hover:scale-105 transition-transform"
      data-aos="fade-up"
    >
      {/* Card header */}
      <div className="flex justify-between items-center ">
        <h1 className="lg:text-2xl md:text-lg text-sm font-semibold">
          {role}
          <span className="md:text-sm text-xs font-light ml-2">
            ({roleType})
          </span>
        </h1>
        <Link
          to={visitLink}
          className="font-poppins bg-blue-500 text-gray-100 py-1 px-4 rounded-full sm:text-sm text-xs"
        >
          Visit
        </Link>
      </div>

      {/* company info */}
      <div className="w-full mt-3 flex items-center [&>*]:m-3 flex-wrap lg:text-sm text-xs">
        <p className="font-medium">
          Company Name: <span className="font-light">{companyName}</span>
        </p>
        <p className="font-medium">
          Location: <span className="font-light">{location}</span>
        </p>
        <p className="font-medium">
          Duration: <span className="font-light">{duration}</span>
        </p>
      </div>

      {/* all the tech stacks used in the company */}
      <div className="flex items-center mt-4">
        <p className="font-medium lg:text-sm text-xs">Tech Stacks: </p>
        <div className="flex items-center space-x-3 ml-3">
          {tStack.map((stack, id) => (
            <GetRequiredLogo logoName={stack} size={20} key={id} />
          ))}
        </div>
      </div>

      {/* What I have built in the company */}
      <div className="mt-4 lg:text-sm text-xs">
        <p className="font-medium">
          Works: <span className="font-light">{works}</span>
        </p>
      </div>
    </div>
  );
};

const ExperianceSection = () => {
  return (
    <div className="mt-28">
      <div className="flex flex-row items-center space-x-3 justify-center w-full">
        <p className="lg:text-3xl text-xl font-poppins font-semibold dark:text-white">
          Experiances
        </p>
        <Construction fontSize="large" className="dark:text-white" />
      </div>

      <div className="flex flex-col justify-center items-center mt-4">
        <ExperianceCard
          role={"Full Stack Developer"}
          roleType={"Intern"}
          companyName={"Creative Upaay"}
          location={"remote"}
          duration={"4/11/2024 - Present"}
          tStack={["reactjs", "mongodb", "typescript", "tailwindcss", "redux"]}
          works={
            " My responsibility is to work on the given projects and work closely with the team to fullfill the client requirements."
          }
          visitLink={"https://www.creativeupaay.com/"}
        />
        <ExperianceCard
          role={"Software Development Engineer"}
          roleType={"Intern"}
          companyName={"applyin.co"}
          location={"remote"}
          duration={"01/04/2024 - 31/5/2024"}
          tStack={["reactjs", "css3", "postgressql", "python", "docker"]}
          works={
            " Wrote the frontened. Also built some crucial features like AI image generation, pop up warnings, customized editor, page for taking personal info of user. And also improved efficieny by reduicing the complexity of code."
          }
          visitLink={"https://writeary.com/"}
        />
      </div>
    </div>
  );
};

export default ExperianceSection;
