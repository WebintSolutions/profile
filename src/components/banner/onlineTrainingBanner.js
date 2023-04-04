import React from "react";
import {
  ArrowRightIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import SubscribeBanner from "./subscribeBanner";

const OnlineTrainingBanner = () => {
  return (
    <>
      <section className="bg-[#e5e5e5]">
        <div className="flex lg:flex-row justify-between flex-col-reverse text-gray-900">
          <div className="flex flex-col aline-items-center mt-4 w-full">
            <div className="flex justify-center w-full">
              <div className="flex flex-col items-center justify-center w-[90%] lg:w-3/4 m-4">
                <img
                  src="https://i.ibb.co/x2WZTzp/you-Tube512.png"
                  className="h-[128px] w-[128px] hidden lg:inline"
                />
                <h4 className="mt-1 pt-1">
                  <span className="font-bold font-titillium text-2xl">
                    WEB-INTELLIGENT
                  </span>
                </h4>
                <h4>YouTube Channel</h4>
                <img
                  src="https://i.ibb.co/s5cm6sY/online-Training.png"
                  className="h-fit w-fit inline lg:hidden"
                />
                <div className="card bg-base-100 rounded-none p-0 mt-4">
                  <div className="card-body items-center text-center p-4 shadow-2xl">
                    <div className="flex flex-col justify-center items-center">
                      <div className="p-2 border-b-[1px] border-[#e5e5e5]">
                        <h2 className="card-title">Responsive Web Design</h2>
                      </div>
                      <p className="text-left m-2">
                        In the Responsive Web Design, you will learn building
                        static webpages using HTML (Hypertext Markup Language)
                        for content and CSS (Cascading Style Sheets) for design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://i.ibb.co/s5cm6sY/online-Training.png"
            className="h-[512px] w-[512px] hidden lg:inline"
          />
        </div>
        <div className="divider mb-0"></div>
      </section>
    </>
  );
};

export default OnlineTrainingBanner;
