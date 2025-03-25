import { ElectricBolt } from "@mui/icons-material";
import SkillBox from "./SkillBox";

const SkillSection = () => {
  return (
    <div className="mt-28 py-10" id="skills">
      <div className="flex flex-row items-center space-x-3 justify-center w-full">
        <p className="lg:text-3xl text-xl font-poppins font-semibold text-black dark:text-white">
          Skills
        </p>
        <ElectricBolt fontSize="large" className="dark:text-white" />
      </div>

      <div className="py-7 flex justify-center flex-wrap divide-y-2 divide-gray-100 dark:divide-gray-900">
        <SkillBox
          title="Frontend Skills"
          skills={[
            { skill: "html5", level: "99%" },
            { skill: "css3", level: "90%" },
            { skill: "reactjs", color: "#000eaa", level: "80%" },
            { skill: "tailwindcss", level: "90%" },
            { skill: "nextjs", color: "#000", level: "50%" },
            { skill: "sass", level: "90%" },
            { skill: "materialui", level: "80%" },
            { skill: "styled-components", level: "90%" },
          ]}
        />
        <SkillBox
          title="Backend Skills"
          skills={[
            { skill: "nodejs", level: "80%" },
            { skill: "expressjs", level: "75%" },
            { skill: "javascript", level: "85%" },
            { skill: "typescript", level: "60%" },
            { skill: "sanity", level: "60%" },
            { skill: "redux", level: "65%" },
          ]}
        />
        <SkillBox
          title="Database"
          skills={[
            { skill: "mongodb", level: "60%" },
            { skill: "mysql", level: "85%" },
            { skill: "firebase", level: "80%" },
          ]}
        />
        <SkillBox
          title="Languages"
          skills={[
            { skill: "java", level: "95%" },
            { skill: "c", level: "85%" },
            { skill: "cpp", level: "90%" },
            { skill: "kotlin", level: "70%" },
            { skill: "go", level: "60%" },
            { skill: "python", level: "85%" },
          ]}
        />
        <SkillBox
          title="Cloud Skills"
          skills={[{ skill: "aws", level: "30%" }]}
        />
        <SkillBox
          title="DevOps Skills"
          skills={[
            { skill: "git", level: "85%" },
            { skill: "docker", level: "55%" },
            { skill: "linux", level: "75%" },
          ]}
        />
      </div>
    </div>
  );
};

export default SkillSection;
