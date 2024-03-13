import React from "react";
import LandingBanner from "./components/landingBanner";
import ServicesMethod from "./components/servicesMethod";
import AutomationForEfficiency from "./components/AutomationForEfficiency";
import AutoBlogging from "./components/autoBlogging";
import ScallingUpCard from "./components/ScallingUpCard";
import AnimatedCard from "./components/AnimatedCard";

type Props = {};

const Landing = (props: Props) => {
  return (
    <div>
      <LandingBanner />
      <ServicesMethod />
      <AutoBlogging />
      <AutomationForEfficiency />
      <ScallingUpCard />
    </div>
  );
};

export default Landing;
