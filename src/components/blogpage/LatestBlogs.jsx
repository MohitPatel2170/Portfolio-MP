import { Link } from "react-router-dom";

const LatestBlogs = ({ latestBlogs }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <p className="text-center lg:text-3xl text-xl font-poppins mb-10 dark:text-white">
        Latest blogs
      </p>

      <div className="grid grid-cols-3 grid-rows-3 w-11/12  lg:w-3/4 h-[500px] md:h-[900px] gap-3">
        <Link
          to={`/blog/${latestBlogs[0]?.node.slug}`}
          title={latestBlogs[0]?.node.title}
          className=" bg-slate-50 dark:bg-black col-span-3 row-span-2 rounded-md cursor-pointer"
        >
          <img
            src={latestBlogs[0]?.node.coverImage.url}
            alt="Blog Banner"
            className="h-2/5 sm:h-4/6 w-full object-cover object-left-top rounded-t-md"
          />
          <div className="p-3 dark:text-white">
            <h1 className="text-xl md:text-3xl font-bold font-poppins">
              {latestBlogs[0]?.node.title}
            </h1>

            <p className="mt-2 font-extralight text-sm md:text-lg line-clamp-3">
              {latestBlogs[0]?.node.brief}
            </p>
          </div>
        </Link>

        {[1, 2, 3].map((value, index) => (
          <Link
            to={`/blog/${latestBlogs[value]?.node.slug}`}
            key={index}
            title={latestBlogs[value]?.node.title}
            className=" bg-slate-50 dark:bg-black col-span-1 row-span-1 rounded-md cursor-pointer"
          >
            <img
              src={latestBlogs[value]?.node.coverImage.url}
              alt="Blog Banner"
              className="h-2/4 w-full object-cover object-left-top rounded-t-md"
            />
            <div className="p-3 dark:text-white">
              <h1 className="text-xs sm:text-sm md:text-lg font-poppins font-bold">
                {latestBlogs[value]?.node.title}
              </h1>
              <p className="hidden sm:block mt-2 font-extralight text-xs md:text-base line-clamp-2">
                {latestBlogs[value]?.node.brief}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
