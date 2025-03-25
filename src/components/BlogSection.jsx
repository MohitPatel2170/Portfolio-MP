import KeyboardIcon from "@mui/icons-material/Keyboard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  const query = `query Publication {
    publication(host: "codago.hashnode.dev/") {
        posts(first: ${window.innerWidth < 640 ? "2" : "4"}) {
            edges {
                node {
                    title
                    brief
    								views
                    slug
                  	coverImage{
                      url
                    }
                    url
                }
            }
        }
    }
  }`;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  useEffect(() => {
    fetch("https://gql.hashnode.com", options)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.data.publication.posts.edges);
        // console.log(data.data.publication.posts.edges);
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div className="lg:mt-28 mt-5 py-10" id="skillsSection">
      <div className="flex flex-row items-center space-x-3 justify-center w-full mb-10">
        <p className="lg:text-3xl text-xl font-poppins font-semibold text-black dark:text-white">
          Blogs
        </p>
        <KeyboardIcon fontSize="large" className="dark:text-white" />
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full px-3 md:px-0  md:w-11/12  h-[700px] grid grid-cols-3 grid-rows-2 sm:grid-rows-3 gap-y-4 sm:gap-2 md:gap-3">
          <Link
            to={`/blog/${blogs[0]?.node.slug}`}
            title={blogs[0]?.node.title}
            className=" bg-slate-100 dark:bg-black col-span-3 row-span-1 sm:col-span-2  sm:row-span-2 rounded-md overflow-hidden cursor-pointer"
          >
            <img
              src={blogs[0]?.node.coverImage.url}
              alt="Blog Banner"
              className="h-1/2 lg:h-2/3 w-full object-cover object-left-top rounded-t-md"
            />
            <div className="p-3 dark:text-white">
              <p className="text-xs sm:text-base">
                {blogs[0]?.node.views} Views
              </p>
              <h1 className="text-base sm:text-2xl font-medium">
                {blogs[0]?.node.title}
              </h1>
              <p className="mt-2 font-light text-xs sm:text-base">
                {blogs[0]?.node.brief}
              </p>
            </div>
          </Link>
          <Link
            to={`/blog/${blogs[1]?.node.slug}`}
            title={blogs[1]?.node.title}
            className="bg-slate-100  dark:bg-black col-span-3 row-span-1 sm:col-span-1  rounded-md overflow-hidden"
          >
            <img
              src={blogs[1]?.node.coverImage.url}
              alt="Blog Banner"
              className="h-1/2 lg:h-2/3 w-full object-cover object-left-top rounded-t-md "
            />
            <div className="p-3 dark:text-white">
              <p className="text-xs">{blogs[1]?.node.views} Views</p>
              <h1 className="font-medium">{blogs[1]?.node.title}</h1>
              <p className="mt-2 font-light block text-xs sm:hidden sm:text-base">
                {blogs[1]?.node.brief}
              </p>
            </div>
          </Link>
          <Link
            to={`/blog/${blogs[2]?.node.slug}`}
            title={blogs[2]?.node.title}
            className="bg-slate-100 dark:bg-black col-span-1 row-span-2 rounded-md overflow-hidden hidden sm:block"
          >
            <img
              src={blogs[2]?.node.coverImage.url}
              alt="Blog Banner"
              className="h-1/2 w-full object-cover object-left-top rounded-t-md"
            />
            <div className="p-3 dark:text-white">
              <p className="text-xs">{blogs[2]?.node.views} Views</p>
              <h1 className="text-xl font-medium">{blogs[2]?.node.title}</h1>
              <p className="mt-2 font-light">{blogs[2]?.node.brief}</p>
            </div>
          </Link>

          <Link
            to={`/blog/${blogs[3]?.node.slug}`}
            title={blogs[3]?.node.title}
            className="bg-slate-100 dark:bg-black col-span-2 row-span-1 rounded-md sm:flex hidden flex-1 overflow-y-hidden"
          >
            <img
              src={blogs[3]?.node.coverImage.url}
              alt="Blog Banner"
              className="h-full flex-[0.1] w-full object-cover object-left-top rounded-l-md"
            />
            <div className="p-3 flex-[0.9] dark:text-white">
              <p className="text-xs">{blogs[3]?.node.views} Views</p>
              <h1 className="text-xl font-medium">{blogs[3]?.node.title}</h1>
              <p className="mt-2 font-light">{blogs[3]?.node.brief}</p>
            </div>
          </Link>
        </div>

        <Link
          to={"/blog"}
          title="My all blogs"
          className="font-light bg-blue-600 text-gray-100 py-2 px-7 rounded-full text-sm mt-7 hover:scale-105"
        >
          Read all
        </Link>
      </div>
    </div>
  );
};

export default BlogSection;
