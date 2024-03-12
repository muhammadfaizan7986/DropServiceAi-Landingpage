import React from "react";
import LandingBanner from "./components/landingBanner";
import ServicesMethod from "./components/servicesMethod";

type Props = {};

const Landing = (props: Props) => {
  return (
    <div>
      <LandingBanner />
      <ServicesMethod />
    </div>
  );
};

export default Landing;
