import React from "react";
import Group from "@/components/Icons/Group";
type Props = {};

const Header = (props: Props) => {
  return (
    <div
      className=" p-5 flex justify-center items-center bg-black border-gradient"
      style={{
        borderBottom: "2px solid #ffffff",
        borderImageSource:
          "linear-gradient(90deg, #000000 0%, #1621BC 13.5%, #4F59D9 47%, #212CC1 83%, #000000 100%)",
      }}
    >
      <div className="flex justify-between w-[90%] items-center">
        <h1 className="text-3xl  font-bold flex justify-between items-center">
          DropService
          <span>
            <Group />
          </span>
        </h1>
        <button className="bg-gradient-to-r from-[#2E9BBE] to-[#00E5FF] h-[50px] w-[280px] rounded-full text-white font-medium">
          GET STARTED 👉
        </button>
      </div>
    </div>
  );
};

export default Header;
