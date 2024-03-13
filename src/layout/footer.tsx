import Group from "@/components/Icons/Group";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full bg-black flex items-center justify-center py-7 px-20">
      <div className="flex items-center justify-between w-full">
        <p className="font-light text-lg">
          © 2024 Drop Servicing AI. All rights reserved.
        </p>
        <h1 className="flex items-center font-montserrat font-semibold text-3xl">
          DropServicing
          <span>
            <Group />
          </span>
        </h1>
        <p className="font-light text-lg">
          Privacy Policy | Terms & Conditions
        </p>
      </div>
    </div>
  );
};

export default Footer;
