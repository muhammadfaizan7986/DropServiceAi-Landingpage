import GreenVector from "@/components/Icons/GreenVector";
import Image from "next/image";
import React from "react";

type Props = {};

const AutoBlogging = (props: Props) => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="flex h-[100%]  justify-center  gap-6">
        <div className="basis-[35%] ">
          <div className="ml-8 w-[90%]">
            <div>
              <h1 className=" text-5xl tracking-wide font-anton leading-tight">
                <span className="text-[#5AFFE3]">Build, Automate,</span> &{" "}
                <span className="text-[#5AFFE3]">Scale</span> your business with
                less work
              </h1>
            </div>
            <div className="mt-2">
              <p className="text-[20px] leading-relaxed tracking-wide font-medium font-montserrat">
                Drop Servicing AI lets you enjoy the results of your business
                while it does the work. Its like having a team that works 24/7
                to build, automate and scale your business.
              </p>
            </div>
            <div className="mt-5">
              <p className="font-montserrat font-light text-[16px]">
                In the dynamic world of Drop Servicing, staying ahead means
                embracing innovation. Drop Servicing AI is your ultimate AI
                companion, designed to revolutionize the way you manage your
                Drop Servicing business. Whether youre starting fresh or scaling
                new heights, our AI tool is tailored to eliminate 95% of the
                work.
              </p>
            </div>
            <div className="">
              <Image
                src="/images/Testimonials.png"
                alt="testimonials"
                width={600}
                height={300}
              />
            </div>
          </div>
        </div>
        <div className="basis-[50%]">
          <div className="">
            {" "}
            <Image
              className="w-full h-full"
              src="/images/auto-blogging-img.png"
              alt="Auto Blogging image"
              width={720}
              height={559}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoBlogging;
