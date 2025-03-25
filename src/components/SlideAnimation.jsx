import "./styles/Transportation.css";

const SlideAnimation = ({ children }) => {
  return (
    <div className="container-transport flex items-center space-x-14 overflow-hidden">
      {children}
    </div>
  );
};

export default SlideAnimation;
