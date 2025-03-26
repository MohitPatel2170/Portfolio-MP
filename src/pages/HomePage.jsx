import { Helmet } from "react-helmet";
import EventSection from "../components/EventSection";
import ExperianceSection from "../components/ExperianceSection";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";
import TransportationRow from "../components/TransportationRow";


const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Mohit Patel</title>
        <meta
          name="description"
          content="The portfolio of Mohit Patel. Where I showed my all relevent skills, experiances and all the other stuffs of me as a developer"
        />
      </Helmet>

      <HeroSection />

      <TransportationRow />

      <ExperianceSection />

      <ProjectSection />

      <SkillSection />

      {/* <WhatCanIDo /> */}

      <EventSection />
    </>
  );
};

export default HomePage;
