import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import myimage from "../assets/my-image.jpg";
import "./styles/BlinkEffect.css";
import TypingEffect from "./TypingEffect";

const HeroSection = () => {
  const navigate = useNavigate();

  const profileRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const profile = profileRef.current;

    if (!profile) return;

    const profileDiv = profile.getBoundingClientRect();
    const breakpointX = profileDiv.x + profile.width / 2;
    const breakpointY = profileDiv.top + profile.height / 2;
    console.log(breakpointX, breakpointY);

    const mouseMoveController = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      if (x > breakpointX && y < breakpointY) {
        console.log("top right");
        profile.style.transform =
          "perspective(1000px) rotateX(-15deg) rotateY(-15deg)";
      } else if (x > breakpointX && y > breakpointY) {
        console.log("down right");
        profile.style.transform =
          "perspective(1000px) rotateX(15deg) rotateY(-15deg)";
      } else if (x < breakpointX && y < breakpointY) {
        console.log("top left");
        profile.style.transform =
          "perspective(1000px) rotateX(-15deg) rotateY(15deg)";
      } else if (x < breakpointX && y > breakpointY) {
        console.log("down left");
        profile.style.transform =
          "perspective(1000px) rotateX(15deg) rotateY(15deg)";
      }
    };

    const mouseLeaveController = () => {
      profile.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    };

    profile.addEventListener("mousemove", mouseMoveController);
    profile.addEventListener("mouseleave", mouseLeaveController);

    return () => {
      profile.removeEventListener("mousemove", mouseMoveController);
      profile.removeEventListener("mouseleave", mouseLeaveController);
    };
  }, []);

  return (
    <div className="flex md:flex-row flex-col items-center md:justify-evenly mt-20">
      <div className="md:w-1/3 w-3/4" data-aos="slide-right">
        {/* big text */}
        <div className=" bg-blue-300 p-5 rounded-md">
          <p className="lg:text-5xl text-2xl font-bold font-poppins leading-tight">
            Hey <span className="lg:text-4xl">👋</span>,<br /> I'm a{" "}
            <TypingEffect />
            <div className="h-8 w-1 bg-yellow-300 inline-block mx-3 blinkit"></div>
            , Technical Writer
          </p>
        </div>

        {/* small text */}
        <div className="py-4">
          <p className="font-poppins text-sm font-thin lg:text-lg dark:text-white">
            Welcome to my digital space! I'm Mohit Patel, a passionate full-stack
            developer with a flair for crafting digital experiences.
          </p>
        </div>

        {/* social media links */}
        <div className="lg:pt-5 pt-7 [&>*]:m-3 flex flex-wrap items-center">
          <a
            href="https://github.com/MohitPatel2170"
            target="_blank"
            title="Github"
          >
            <GitHub fontSize="large" className="bg-white rounded-full" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohitpatel2170"
            target="_blank"
            title="Linkedin"
          >
            <LinkedIn fontSize="large" className="text-blue-600" />
          </a>
          <a
            href=""
            target="_blank"
            title="Twitter or X"
          >
            <Twitter fontSize="large" className="text-lime-400" />
          </a>
          <a
            href="https://www.instagram.com/its_unq_mohit?igsh=MXdicGRoMjU4Zzd1eA="
            target="_blank"
            title="Instagram"
          >
            <Instagram fontSize="large" className="text-pink-600" />
          </a>

          <Link
            to={"/resume"}
            className="font-poppins bg-blue-800 text-gray-100 py-2 px-3 font-semibold rounded-md sm:text-sm text-xs"
          >
            View Resume
          </Link>
        </div>
      </div>

      <div className="bg-hero-background grid mt-14 " data-aos="slide-left">
        {/* <svg
          className="col-start-1 row-start-1"
          id="10015.io"
          viewBox="0 0 480 480"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            fill="#474bff"
            d="M404.5,266Q400,292,405.5,328Q411,364,393.5,396Q376,428,332.5,409Q289,390,264.5,414Q240,438,215,416.5Q190,395,166.5,384Q143,373,109.5,366Q76,359,68.5,328.5Q61,298,62.5,269Q64,240,38,203Q12,166,65.5,159Q119,152,136.5,137Q154,122,172,104Q190,86,215,76Q240,66,268,67Q296,68,314.5,90Q333,112,356,125.5Q379,139,422.5,153Q466,167,437.5,203.5Q409,240,404.5,266Z"
          />
        </svg> */}
        {/* <img
          src={heroImage}
          alt="profile"
          className="col-start-1 row-start-1 md:h-80 lg:h-full h-72"
        /> */}

        <img
          ref={profileRef}
          src={myimage}
          alt="profile"
          className="col-start-1 row-start-1  h-96 lg:h-[500px] rounded-full transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default HeroSection;
