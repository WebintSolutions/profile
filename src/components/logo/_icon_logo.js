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
        <img src="https://i.ibb.co/drw1YfM/Web-Int-Sols-Logo.png" className={classCode} />
      </div>
    </>
  );
};

export default WebIntIconLogo;
