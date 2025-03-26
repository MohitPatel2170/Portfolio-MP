import { SportsBar } from "@mui/icons-material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const EventSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="mt-28" data-aos="zoom-in">

        <div className="flex justify-center items-center mt-7">
          <h1 className="lg:text-3xl text-xl font-light dark:text-white">
            Happy Coding
          </h1>
          <SportsBar fontSize="large" className="dark:text-white ml-3" />
        </div>
      </div>
  );
};

export default EventSection;
