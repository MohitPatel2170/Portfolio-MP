import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useState } from "react";
import binaryNumberHeroImage from "../assets/binaryNumbers.jpg";
import LatestBlogs from "../components/blogpage/LatestBlogs";
import MoreBlogs from "../components/blogpage/MoreBlogs";
import SearchBlog from "../components/blogpage/SearchBlog";
import Newsletter from "../components/blogpage/Newsletter";

const BlogsPage = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [moreBlogs, setMoreBlogs] = useState([]);

  const getQuery = (condition) => {
    const query = `query Publication {
      publication(id:"638980f9bc608d676e463a68") {
          posts(${condition}) {
              edges {
                  cursor
                  node {
                      title
                      brief
                      coverImage{
                        url
                      }
                      slug
                  }
              }
          }
      }
    }`;

    return query;
  };

  const getOptions = (query) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    };

    return options;
  };

  useEffect(() => {
    fetch("https://gql.hashnode.com", getOptions(getQuery("first:10")))
      .then((response) => response.json())
      .then((data) => {
        setLatestBlogs(data.data.publication.posts.edges.slice(0, 4));
        setMoreBlogs(data.data.publication.posts.edges.slice(4));
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  const loadMoreBlogs = () => {
    fetch(
      "https://gql.hashnode.com",
      getOptions(
        getQuery(`first:3,after:"${moreBlogs[moreBlogs.length - 1].cursor}"`)
      )
    )
      .then((response) => response.json())
      .then((data) => {
        const newBlogs = data.data.publication.posts.edges;

        setMoreBlogs([...moreBlogs, ...newBlogs]);
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  };

  return (
    <>
      {/* Meta data of the blog page */}
      <Helmet>
        <title>Ronak Paul: Blogs</title>
        <meta
          name="description"
          content="All the technical blogs written by Ronak Paul. On the topics like Web Dev, Mobile Dev, Backend, Docker, Kubernetes, GitHub, Web3 as well as Daily Tech news etc"
        />
      </Helmet>

      {/* Blog page code starts here */}

      <div>
        {/* Blog page hero section */}
        <div className="w-full flex flex-1 h-96">
          <div className="flex-[0.5] p-10 flex flex-col justify-center lg:text-5xl text-2xl font-bold font-poppins dark:text-white">
            <p className="leading-snug">Blogs on</p>
            <p className="leading-snug">
              Development, Cloud, Web3
              <span className="text-blue-600"> & Tech News</span>
            </p>
            <p className="leading-snug text-base text-right">by Ronak Paul</p>
          </div>

          <div className="flex-[0.5]">
            <img
              src={binaryNumberHeroImage}
              alt="Binary numbers banner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Search bar for blogs */}
        <SearchBlog />

        {/* Latest blog section */}
        <LatestBlogs latestBlogs={latestBlogs} />

        {/* More blogs section */}
        <MoreBlogs blogs={moreBlogs} />
        <div className="w-full flex justify-center mt-10">
          <button
            onClick={loadMoreBlogs}
            className="font-light bg-blue-600 text-gray-100 py-2 px-7 rounded-full text-sm mt-7 hover:scale-105"
          >
            Load More
          </button>
        </div>

        {/* Newsletter subscribe section */}
        <div className="w-full flex justify-center">
          <div className="w-3/4 md:w-1/2 mt-40 flex flex-col items-center space-y-7">
            <p className="text-xl font-poppins dark:text-white text-center">
              Subscribe to my Newsletter
            </p>
            <Newsletter />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsPage;
