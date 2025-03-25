import GetRequiredLogo from "./Logos";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SkillBox = ({ title, skills }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="w-full font-poppins rounded-md flex flex-row items-center justify-evenly my-6 py-2">
      <div className="text-black lg:text-3xl md:text-xl text-base font-thin dark:text-white">
        {title}
      </div>
      <div
        className="flex flex-row flex-wrap items-center lg:w-80 md:w-52 w-32 [&>*]:m-2"
        data-aos="flip-left"
      >
        {skills.map((item, index) => (
          <div className="relative" key={index}>
            <div className="absolute lg:p-3 p-1 bg-gray-200 rounded-full opacity-0 hover:opacity-80">
              <p className="lg:text-sm text-xs font-bold font-poppins">
                {item.level}
              </p>
            </div>
            <GetRequiredLogo
              logoName={item.skill}
              color={item.color}
              size={window.innerWidth >= 1024 ? 50 : 30}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillBox;
