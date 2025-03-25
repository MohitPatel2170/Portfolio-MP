import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchedBlogBox = ({ blog }) => {
  return (
    <Link
      to={`/blog/${blog?.node.slug}`}
      className="flex flex-col space-y-2 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-md hover:cursor-pointer hover:bg-blue-100"
    >
      <p className="text-blue-500 text-sm md:text-xl font-poppins">
        {blog?.node.title}
      </p>
      <p className="line-clamp-2 text-xs md:text-sm font-light dark:text-white">
        {blog?.node.brief}
      </p>
    </Link>
  );
};

const SearchBlog = () => {
  const [searchedBlogs, setSearchedBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const query = `query SearchPostsOfPublication($filter: SearchPostsOfPublicationFilter!){
    searchPostsOfPublication(first: 5,filter: $filter) {
        edges {
          node {
            title
            brief
            slug
            }
          }
    }}`;

  const getOptions = (searchedString) => {
    const bodyObj = {
      query: query,
      variables: {
        filter: {
          query: searchedString,
          publicationId: "638980f9bc608d676e463a68",
        },
      },
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyObj),
    };

    return options;
  };

  const searchBlogs = (searchedString) => {
    if (!searchedString) {
      setSearchedBlogs([]);

      return;
    }

    fetch("https://gql.hashnode.com", getOptions(searchedString))
      .then((response) => response.json())
      .then((data) => {
        setSearchedBlogs(data.data.searchPostsOfPublication.edges);
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      searchBlogs(searchQuery);
    }, 2000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [searchQuery]);

  return (
    <div className="my-20 flex justify-center w-full">
      <div className="w-3/4 md:w-1/2 relative">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search for blogs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-slate-100 dark:bg-slate-800 py-4 px-4 font-poppins outline-none  rounded-l-md w-full text-sm md:text-base placeholder:select-none dark:text-white"
          />
          <button
            onClick={() => searchBlogs(searchQuery)}
            className="bg-blue-600 py-4 px-4 text-white font-poppins rounded-r-md text-sm md:text-base"
          >
            Search
          </button>
        </div>
        {searchedBlogs.length != 0 && (
          <div className="w-full h-96 bg-white dark:bg-black border border-slate-100 dark:border-none rounded-md absolute mt-3 p-3 md:p-5 shadow-md overflow-hidden">
            <p className="text-sm text-slate-500 font-poppins">
              Found {searchedBlogs.length} results
            </p>
            <div className="flex flex-col space-y-2 md:space-y-3 w-full h-full mt-4 md:mt-7 overflow-y-scroll no-scrollbar">
              {searchedBlogs.map((blog, index) => (
                <SearchedBlogBox key={index} blog={blog} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBlog;
