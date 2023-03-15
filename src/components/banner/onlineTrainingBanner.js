import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import SubscribeBanner from "./subscribeBanner";

const OnlineTrainingBanner = () => {
  return (
    <>
      <section className="bg-[#e5e5e5]">
        <div className="flex lg:flex-row justify-between flex-col-reverse text-gray-900">
          <img
            src="https://i.ibb.co/s5cm6sY/online-Training.png"
            className="h-[512px] w-[512px] hidden lg:inline"
          />
          <div className="flex flex-col aline-items-center mt-4 w-full">
            <div className="flex flex-col justify-center items-center lg:flex-row">
              <h3 className="text-2xl font-bold md:text-3xl">
                WebInt Solutions
              </h3>
              <h2 className="text-2xl font-bold md:text-3xl p-2 banner-title-md">
                <span className="bg-primary text-white">WEB Development Training</span>
              </h2>
            </div>
            <div className="flex justify-center w-full">
              <div className="flex flex-col items-center justify-center w-[90%] lg:w-3/4 m-4">
                <h4 className="text-lg font-titillium">
                  WEBINT Solutions, offers free training for cadidates who are
                  willing to commit two years of work agreement. We offer
                  6-months of training, later provide opportunity to work
                  with JOB-Support program or HostelMate Pro web app development based 
                  upon the individual performance.
                </h4>
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
                          for content and CSS (Cascading Style Sheets) for
                          design.
                        </p>
                    </div>
                  </div>
                  <div className="card-footer bg-[#e5e5e5] text-gray-500 text-center p-3 w-full h-full flex justify-between">
                    <div className="flex justify-center items-center">
                      <button className="btn btn-primary btn-sm btn-circle m-1 text-white">
                        <ChevronLeftIcon className="h-3 w-3" />
                      </button>
                    </div>
                    <SubscribeBanner />
                    <div className="flex justify-center items-center">
                      <button className="btn btn-primary btn-sm btn-circle m-1 text-white">
                        <ChevronRightIcon className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="divider mb-0"></div>
      </section>
    </>
  );
};

export default OnlineTrainingBanner;
