import {
  ArrowLeftRounded,
  ArrowRightRounded,
  Devices,
} from "@mui/icons-material";
import ProjectCard from "./ProjectCard";
import diagramgenCover from "../assets/projectCovers/diagramgen.jpg";
import gmailCover from "../assets/projectCovers/gmail.jpg";
import linkedCover from "../assets/projectCovers/linkedin.jpg";
import slackCover from "../assets/projectCovers/slack.jpg";
import rpgsCover from "../assets/projectCovers/rpgs.jpg";
import expenseTrackerAppCover from "../assets/projectCovers/owlspender.jpg";
import codeCasingCover from "../assets/projectCovers/CodeCasing.jpg";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

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
            sourceLink="https://github.com/ronak-pal1/diagramgen"
            techStacks={["reactjs", "tailwindcss", "aws"]}
            status={"Ongoing"}
          />
          <ProjectCard
            imgUrl={expenseTrackerAppCover}
            title="Expense Tracker App"
            desp="This is a expense tracker app for students and working professional to keep track of their expenses. It uses labels and prizes to keep track expenses."
            sourceLink="https://github.com/ronak-pal1/Expense-Tracker-App"
            techStacks={["reactjs", "firebase", "tailwindcss"]}
            status={"Completed"}
          />
          <ProjectCard
            imgUrl={codeCasingCover}
            title="Code snippet generator"
            desp="CodeCasing is a code to image generator app. You just have to give the code and your will get an customizable image in return."
            sourceLink="https://ronak-pal1.github.io/CodeCasing/"
            techStacks={["html5", "css3", "javascript"]}
            status={"Completed"}
          />
          <ProjectCard
            imgUrl={rpgsCover}
            title="CLI based password Manager"
            desp="It is fully encrypted password manager for Command Line where you can save multiple passwords with a label and retrieve them whenever you want."
            sourceLink="https://www.npmjs.com/package/rpgs"
            techStacks={["javascript", "nodejs"]}
            status={"Completed"}
          />
          <ProjectCard
            imgUrl={gmailCover}
            title="Gmail Clone"
            desp="Gmail Clone is a replica of the real Gmail. Here you can send emails to others and also receive emails from others."
            sourceLink="https://github.com/ronak-pal1/Email-Clone"
            techStacks={["reactjs", "redux", "css3", "firebase", "materialui"]}
            status={"Completed"}
          />
          <ProjectCard
            imgUrl={linkedCover}
            title="LinkedIn Clone"
            desp="LinkedIn Clone is a replica of the real LinkedIn. Here you can make posts and you can also see others posts."
            sourceLink="https://github.com/ronak-pal1/LinkedIn-Clone"
            techStacks={["reactjs", "redux", "css3", "firebase", "materialui"]}
            status={"Completed"}
          />
          <ProjectCard
            imgUrl={slackCover}
            title="Slack Clone"
            desp="slack Clone is a replica of the real Slack app. Here you can make different rooms and chat with other members in the room."
            sourceLink="https://github.com/ronak-pal1/Email-Clone"
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

      {/* <div className="flex flex-row justify-center">
        <a
          href="https://github.com/ronak-pal1?tab=repositories"
          target="_blank"
          className="bg-blue-500 font-poppins font-bold py-2 px-3 text-white rounded-md"
        >
          All Projects
        </a>
      </div> */}
    </div>
  );
};

export default ProjectSection;
