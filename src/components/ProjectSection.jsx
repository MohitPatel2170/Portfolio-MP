import {
  ArrowLeftRounded,
  ArrowRightRounded,
  Devices,
} from "@mui/icons-material";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import diagramgenCover from "../assets/projectCovers/diagramgen.jpg";
import gmailCover from "../assets/projectCovers/gmail.jpg";
import linkedCover from "../assets/projectCovers/linkedin.jpg";
import slackCover from "../assets/projectCovers/slack.jpg";
import ProjectCard from "./ProjectCard";

const windowWIDTH = window.innerWidth;

const ProjectSection = () => {
  const navigate = useNavigate();
  const projectContainer = useRef(null);
  let scrollPos = 0;

  const moveRight = () => {
    if (windowWIDTH - scrollPos + 800 < 0) return;
    scrollPos += 800;
    projectContainer.current.scrollTo({ left: scrollPos, behavior: "smooth" });
  };

  const moveLeft = () => {
    if (scrollPos <= 0) return;

    scrollPos -= 800;
    projectContainer.current.scrollTo({ left: scrollPos, behavior: "smooth" });
  };

  return (
    <div className="mt-28" id="projects">
      <div className="flex flex-row items-center space-x-3 justify-center w-full">
        <p className="lg:text-3xl text-xl font-poppins font-semibold dark:text-white">
          Projects
        </p>
        <Devices fontSize="large" className="dark:text-white" />
      </div>

      <div className="relative">
        <div
          className="absolute left-4 top-1/2 z-20 rounded-full bg-black text-white dark:bg-white dark:text-black hidden md:block cursor-pointer"
          onClick={moveLeft}
        >
          <ArrowLeftRounded fontSize="large" />
        </div>
        <div
          className="absolute right-4 top-1/2 z-20 rounded-full bg-black text-white dark:bg-white dark:text-black hidden md:block cursor-pointer"
          onClick={moveRight}
        >
          <ArrowRightRounded fontSize="large" />
        </div>
        <div
          className="px-5 py-7 flex overflow-x-scroll no-scrollbar"
          ref={projectContainer}
        >
          <ProjectCard
            imgUrl={diagramgenCover}
            title="Whiteboard and AI based Diagram Generator"
            desp="This is a AI based whiteboard tool like excalidraw but with much more features. You can make digrams with different shapes and also collaborate with others."
            sourceLink="https://github.com/MohitPatel2170/Diagram-Generator.git"
            techStacks={["reactjs", "tailwindcss", "aws"]}
            status={"Ongoing"}
          />
          <ProjectCard
            imgUrl={gmailCover}
            title="Gmail Clone"
            desp="Gmail Clone is a replica of the real Gmail. Here you can send emails to others and also receive emails from others."
            sourceLink="https://github.com/MohitPatel2170/Gmail-clone.git"
            techStacks={["reactjs", "redux", "css3", "firebase", "materialui"]}
            status={"Completed"}
          />
          <ProjectCard
            imgUrl={linkedCover}
            title="LinkedIn Clone"
            desp="LinkedIn Clone is a replica of the real LinkedIn. Here you can make posts and you can also see others posts."
            sourceLink="https://github.com/MohitPatel2170/LinkdIn-clone.git"
            techStacks={["reactjs", "redux", "css3", "firebase", "materialui"]}
            status={"Completed"}
          />
          <ProjectCard
            imgUrl={slackCover}
            title="Slack Clone"
            desp="slack Clone is a replica of the real Slack app. Here you can make different rooms and chat with other members in the room."
            sourceLink="https://github.com/MohitPatel2170/Slack-Clone.git"
            techStacks={[
              "reactjs",
              "redux",
              "styled-components",
              "firebase",
              "materialui",
            ]}
            status={"Completed"}
          />
        </div>
      </div>

    </div>
  );
};

export default ProjectSection;
