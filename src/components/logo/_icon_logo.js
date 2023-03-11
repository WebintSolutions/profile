import React from "react";
import {
  VideoCameraIcon,
  LightBulbIcon,
  CodeBracketIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/solid";

const WebIntIconLogo = ({classCode="w-fit h-fit"}) => {
  return (
    <>
      <div className="flex justify-center flex-row relative">
        <img src="/WebIntSolsLogo.png" className={classCode} />
      </div>
    </>
  );
};

export default WebIntIconLogo;
