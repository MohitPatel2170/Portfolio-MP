import { ArrowUpward } from "@mui/icons-material";
import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Resume from "./pages/Resume";

function App() {
  const [isdarkMode, setIsDarkMode] = useState(false);
  const [isGoTopVisible, setIsGoTopVisible] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      setIsGoTopVisible(true);
    } else {
      setIsGoTopVisible(false);
    }
  });

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`${isdarkMode && "dark"}`}>
      <Analytics />
      <div className="bg-white dark:bg-zinc-900 relative">
        <Header setDark={setIsDarkMode} currentMode={isdarkMode} />

        <div
          className={`fixed right-6 bottom-3 bg-blue-600 z-50 rounded-full text-white p-1.5 md:p-2 cursor-pointer ${
            isGoTopVisible ? "block" : "hidden"
          }`}
          onClick={goTop}
        >
          <ArrowUpward />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/projects" element={<ProjectsPage />} /> */}
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
