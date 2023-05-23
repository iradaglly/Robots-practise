import React from "react";
import Features from "./Features";
import HeroSection from "./HeroSection";
import News from "./News";
import RobotCards from "./RobotCards";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <HeroSection />
      <RobotCards />
      <Features />
      <News />
    </>
  );
};

export default Home;
