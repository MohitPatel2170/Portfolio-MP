const Footer = () => {
  return (
    <footer className=" py-10 border-t bg-gray-100 dark:bg-black border-gray-500 dark:border-gray-800 mt-10 w-full">
      <div className="flex sm:flex-row flex-col sm:items-baseline items-center justify-center space-y-6 sm:space-y-0 sm:justify-evenly">
        <div className="flex flex-col sm:items-baseline items-center">
          <p className="lg:text-xl text-base text-black font-poppins mb-4 font-thin border-b border-blue-600 w-fit pb-1 dark:text-white">
            Socials
          </p>
          <div className="flex flex-col sm:items-baseline items-center space-y-1 text-blue-500 hover:[&>a]:text-blue-400 lg:text-base text-xs">
            <a href="https://twitter.com/ronak_pal1" target="_blank">
              Twitter
            </a>
            <a href="https://github.com/ronak-pal1" target="_blank">
              Github
            </a>
            <a href="https://instagram.com/ronak_pal1" target="_blank">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/ronak-pal1/" target="_blank">
              LinkedIn
            </a>
            <a href="https://codago.hashnode.dev/" target="_blank">
              Hashnode
            </a>
            <a href="https://www.youtube.com/@CodaGo" target="_blank">
              Youtube
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:items-baseline items-center">
          <p className="lg:text-xl text-base text-black font-poppins mb-4 font-thin border-b border-blue-600 w-fit pb-1 dark:text-white">
            Youtube Playlists
          </p>

          <div className="flex flex-col sm:items-baseline items-center space-y-1 text-gray-600 hover:[&>a]:text-gray-500 lg:text-base text-xs">
            <a
              href="https://www.youtube.com/playlist?list=PLMl6OFJSWfIhBWRWlLO01hSXHqtsbEWzN"
              target="_blank"
            >
              Sorting Playlist
            </a>
            <a
              href="https://www.youtube.com/playlist?list=PLMl6OFJSWfIg4Xms3wk5AbZFdbjD4RuQM"
              target="_blank"
            >
              Searching Playlist
            </a>
            <a
              href="https://www.youtube.com/playlist?list=PLMl6OFJSWfIj9p5NhGW0M_SfpFPHEL3kU"
              target="_blank"
            >
              Interview Questions
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:items-baseline items-center">
          <p className="lg:text-xl text-base text-black font-poppins mb-4 font-thin border-b border-blue-600 w-fit pb-1 dark:text-white">
            Blogs
          </p>

          <div className="flex flex-col sm:items-baseline items-center space-y-1 text-gray-600 hover:[&>a]:text-gray-500 lg:text-base text-xs">
            <a
              href="https://codago.hashnode.dev/mastering-git-commands"
              target="_blank"
            >
              Mastering Git Commands
            </a>
            <a
              href="https://codago.hashnode.dev/enhancing-git-security"
              target="_blank"
            >
              Enhancing Git Security
            </a>
            <a
              href="https://codago.hashnode.dev/git-and-github-introduction"
              target="_blank"
            >
              Git and GitHub: Introduction
            </a>
            <a
              href="https://codago.hashnode.dev/unleashing-the-power-of-web-30"
              target="_blank"
            >
              Unleashing the Power of Web 3.0
            </a>
          </div>
        </div>
      </div>

      <div className="flex sm:justify-end sm:pr-10 justify-center pt-5 sm:pt-0">
        <p className="font-poppins font-thin dark:text-white lg:text-base text-sm">
          Developed by Ronak Paul
        </p>
      </div>
    </footer>
  );
};

export default Footer;
