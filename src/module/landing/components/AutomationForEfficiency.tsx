import BlueVector from "@/components/Icons/BlueVector";
import Image from "next/image";
import React from "react";

type Props = {};

const AutomationForEfficiency = (props: Props) => {
  return (
    <div>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="flex h-[100%]  justify-center  gap-6">
          <div className="basis-[35%] ">
            <div className="ml-8 ">
              <div className="pt-11">
                <h1 className=" text-[2.5rem] tracking-wide font-anton leading-tight">
                  Automation for{" "}
                  <span className="text-[#5AFFE3]">Efficiency</span>
                </h1>
              </div>
              <div className="mt-2">
                <div className="flex">
                  <div className="pr-2 pt-1">
                    <BlueVector />
                  </div>
                  <div>
                    <span className=" pt-5 pb-3 font-anton text-2xl">
                      Project Management
                    </span>
                    <p className="font-montserrat">
                      Helps you oversee projects effortlessly with
                      AI-coordinated templates and workflows, aligning tasks,
                      and streamlining communication.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex">
                  <div className="pr-2 pt-1">
                    <BlueVector />
                  </div>
                  <div>
                    <span className="font-anton text-2xl ">
                      Process Optimization
                    </span>
                    <p className="font-montserrat">
                      Discover the latest softwares available on the market to
                      optimize every stage of your process from marketing and
                      sales to service delivery.
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <Image
                  src="/images/Testimonials2.png"
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
    </div>
  );
};

export default AutomationForEfficiency;
