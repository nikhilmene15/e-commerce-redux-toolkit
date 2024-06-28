import React from "react";
import HeroSection from "../components/HeroSection";
import FeatureProducts from "../components/FeatureProducts";
import Trusted from "../components/Trusted";
import Services from "../components/Services";

function Home() {
  const data = {
    name: "e-com store",
  };
  return (
    <>
      <HeroSection myData={data} />
      <FeatureProducts />
      <Services />
      <Trusted />
    </>
  );
}

export default Home;
