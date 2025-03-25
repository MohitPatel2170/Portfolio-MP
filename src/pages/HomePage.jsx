import { Helmet } from "react-helmet";
import BlogSection from "../components/BlogSection";
import EventSection from "../components/EventSection";
import ExperianceSection from "../components/ExperianceSection";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";
import TransportationRow from "../components/TransportationRow";
import YoutubeSection from "../components/YoutubeSection";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Ronak Paul</title>
        <meta
          name="description"
          content="The portfolio of ronak paul. Where I showed my all relevent skills, experiances, blogs, videos and all the other stuffs of me as a developer"
        />
      </Helmet>

      <HeroSection />

      <TransportationRow />

      <ExperianceSection />

      <ProjectSection />

      <SkillSection />

      {/* <WhatCanIDo /> */}
      <BlogSection />

      <YoutubeSection />

      <EventSection />
    </>
  );
};

export default HomePage;
