"use client";
import ArrowRight from "@/components/Icons/ArrowRight";
import AutomateImg from "@/components/Icons/AutomateImg";
import Choose from "@/components/Icons/Choose";
import Duplicate from "@/components/Icons/Duplicate";
import Launch from "@/components/Icons/Launch";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

const ServicesMethod = (props: Props) => {
  const serviceMethod = [
    {
      id: 1,
      icon: <Choose />,
      title: "Choose",
      description:
        "Quickly find hundreds of simple to sell high profit services",
    },
    {
      id: 2,
      icon: <AutomateImg />,
      title: "Automate",
      description: "Run your business on autopilot with the power of AI",
    },
    {
      id: 3,
      icon: <Launch />,
      title: "Launch",
      description: "Launch your service with the automated sales system",
    },
    {
      id: 4,
      icon: <Duplicate />,
      title: "Duplicate",
      description:
        "Create new revenue streams with more clients, services and marketing channels",
    },
  ];

  return (
    <div className="w-[100%] h-[100vh] mt-[650px] flex  justify-center">
      <div className="flex flex-col items-center">
        <div>
          <h1 className=" text-5xl font-anton">
            The one service method in{" "}
            <span className="text-[#5AFFE3]"> 4 simple steps</span>
          </h1>
        </div>
        <div className="mt-5">
          <p className="font-medium text-2xl">
            Find high demand digital services and turn them intoonline income
            streams with one easy to use AI tool.
          </p>
        </div>
        <div className="flex">
          {serviceMethod.map((item, index) => {
            return (
              <>
                <div className="w-[280px] h-[362px] text-center mt-12">
                  <div className="flex justify-center items-center border-[3px] border-[#1A237E] w-[230px] h-[230px] m-auto rounded-full relative">
                    <div>{item.icon}</div>
                    <div className="border-[3px] flex justify-center items-center bg-black border-[#2E9BBE] w-[40px] h-[40px] rounded-full absolute bottom-[-20px] left-[40%]">
                      {item.id}
                    </div>
                  </div>
                  <div className="mt-5">
                    <span className=" font-bold text-2xl">{item.title}</span>
                  </div>
                  <div className="font-light">
                    <p>{item.description}</p>
                  </div>
                </div>
                <div className="pt-32 px-3" key={index}>
                  {index < 3 && <ArrowRight />}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesMethod;
