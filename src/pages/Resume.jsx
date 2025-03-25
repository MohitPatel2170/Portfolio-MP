import { Helmet } from "react-helmet";
import RESUME_IMG from "../assets/resume.jpg";

const Resume = () => {
  return (
    <div className="mx-2 ">
      <Helmet>
        <title>Ronak Paul: Resume</title>
        <meta name="description" content="Resume of Ronak Paul" />
      </Helmet>
      <img
        src={RESUME_IMG}
        alt="resume"
        className="w-full h-screen object-contain"
      />
    </div>
  );
};

export default Resume;
