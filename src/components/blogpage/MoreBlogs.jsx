import { useEffect } from "react";
import { Link } from "react-router-dom";

const BlogBox = ({ blog }) => {
  return (
    <Link
      to={`/blog/${blog?.node.slug}`}
      title={blog?.node.title}
      className={` bg-slate-50 dark:bg-black col-span-1 row-span-1 rounded-md cursor-pointer`}
    >
      <img
        src={blog?.node.coverImage.url}
        alt="Blog Banner"
        className="h-2/4 w-full object-cover object-left-top rounded-t-md"
      />
      <div className="p-2 lg:p-3 dark:text-white">
        <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-poppins font-bold">
          {blog?.node.title}
        </h1>
        <p className="mt-2 font-extralight text-xs md:text-sm lg:text-base line-clamp-2">
          {blog?.node.brief}
        </p>
      </div>
    </Link>
  );
};

const MoreBlogs = ({ blogs }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-40">
      <p className="text-center lg:text-3xl text-xl  font-poppins mb-10 dark:text-white">
        Read More blogs
      </p>

      <div
        className={`grid grid-cols-2 sm:grid-cols-3 grid-rows-${Math.ceil(
          blogs.length / 3
        )} w-11/12 h-fit gap-2 lg:gap-3`}
      >
        {blogs?.map((blog, index) => (
          <BlogBox blog={blog} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MoreBlogs;
