import { YouTube } from "@mui/icons-material";

const YoutubeSection = () => {
  return (
    <div className="lg:mt-28 mt-5 py-10" id="skillsSection">
      <div className="flex flex-row items-center space-x-3 justify-center w-full mb-10">
        <p className="lg:text-3xl text-xl font-poppins font-semibold text-black dark:text-white">
          Videos
        </p>
        <YouTube fontSize="large" className="dark:text-white" />
      </div>
      {/* 2 */}

      <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 items-center justify-evenly">
        <iframe
          className="2xl:w-130 lg:w-96 md:w-7 2xl:h-72  lg:h-52  md:h-40"
          src="https://www.youtube-nocookie.com/embed/uS7A3mRa7D8?si=jDHlc7bPj4LGkXn0"
          title="Ronak Paul's Quick sort youtube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>

        <iframe
          className="2xl:w-130 lg:w-96 md:w-7 2xl:h-72  lg:h-52  md:h-40"
          src="https://www.youtube-nocookie.com/embed/p527IIgQ4BQ?si=QYkwIr4_h5vVW_LG"
          title="Ronak Paul's Order agnostic binary search youtube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubeSection;
