import React from "react";
import Image from "next/image";

const LandingBanner = () => {
  return (
    <div
      className="banner-bg w-[100%] h-[100vh] flex items-center flex-col "
      style={{
        backgroundImage: 'url("./images/BG.jpg")',
        backgroundSize: "cover",
      }}
    >
      <div className=" w-[700px] mt-[83px] text-center">
        <h1 className=" text-6xl font-anton leading-tight">
          Build A Profitable
          <span className="text-[#5AFFE3]"> Drop Servicing Business</span>{" "}
          Faster
        </h1>
        <div>
          <p className="font-semibold tracking-wide text-[18px] mt-3 leading-tight">
            Building, automating and scaling your Drop Servicing business is now
            95% easier and faster with the first AI powered software for Drop
            Servicing agency owners.
          </p>
        </div>
        <div>
          <p className="my-6 font-bold text-2xl">
            Get Started today for just
            <span className=" bg-white text-[#060D6C] ml-2 px-5 font-bold rounded-full">
              $5,000
            </span>
          </p>
        </div>
        <button className="bg-gradient-to-r from-[#2E9BBE] to-[#00E5FF] h-[60px] w-[330px] rounded-full text-white font-medium">
          GET STARTED 👉
        </button>
      </div>
      <div className="mt-14 ">
        <Image
          className="rounded-2xl"
          src="/images/banner.png"
          alt="My Image"
          width={990}
          height={560}
        />
      </div>
    </div>
  );
};

export default LandingBanner;
