import React from "react";

type Props = {};

const AnimatedCard = (props: Props) => {
  return (
    <div
      className="banner-bg w-[100%] h-[100vh] flex items-center flex-col"
      style={{
        backgroundImage: 'url("./images/particle-wave-bg-1.png")',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <div className="basis-2/4">Line 1</div>
      <div className="basis-2/4"> Line 2</div>
    </div>
  );
};

export default AnimatedCard;
