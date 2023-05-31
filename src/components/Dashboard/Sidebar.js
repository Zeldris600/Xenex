import React, { Children } from "react";
import MainDash from "./MainDash";

const Sidebar = ({ Children }) => {
  return (
    <div className="flex">
      <div className=" fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        {" "}
        Sidebar
      </div>

      <MainDash className="ml-20 border-30">{Children}</MainDash>
    </div>
  );
};

export default Sidebar;
