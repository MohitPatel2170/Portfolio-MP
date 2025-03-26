import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex justify-center">
      <Helmet>
        <title>Mohit Patel: Not Found</title>
        <meta name="description" content="Not found page" />
      </Helmet>
      <div className="mt-10 flex flex-col justify-center items-center">
        <h1 className="lg:text-4xl text-xl">Page Not Found</h1>
        <button
          onClick={() => navigate("/")}
          className="font-poppins bg-blue-500 text-gray-100 py-2 px-3 font-semibold rounded-full text-xs mt-6"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
