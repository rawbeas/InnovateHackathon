import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ActionCards from "../components/ActionCards";
import Footer from "../components/Footer";
import FeatureSection from "../components/FeatureReaction";

const Main = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <ActionCards />
      <Footer />
    </>
  );
};

export default Main;
