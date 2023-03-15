import React, { useState } from "react";
import SlideCardComponent from "../slide-card/_slideCard";

const HostelMateBanner = () => {
  const [features, setFeatures] = useState([
    {
      id: 1,
      imgSrc: "https://i.ibb.co/HXZ8NmJ/hostel-Mate-Accts.png",
      title: "Accounting Pro",
      desc: `HostelMate Pro Daily Finance Report allows a night auditor to verify all purchases, 
      deposits and payments from one report. Accounting pro helps to manage daily spendings smartly 
      and helps to make right estimates for every time food making.`,
      isActive: true,
    },
    {
      id: 2,
      imgSrc: "https://i.ibb.co/SnqjmWH/hostel-Mate-HKeep.png",
      title: "Housekeeping Pro",
      desc: `Manage your housekeeping team and back-of-house operations more effectively. 
            Organize and assign tasks, track room statuses on a real-time feed, and streamline 
            communication with the HostelMate Pro’s Web App.`,
      isActive: false,
    },
    {
      id: 3,
      imgSrc: "https://i.ibb.co/307LjWw/hostel-Mate-Roomate.png",
      title: "Roomate Pro",
      desc: `Roomate Pro web app provides smart-link for every customer of Hostel, which helps to update their feedback attendence
       and joining community chat room individually.`,
      isActive: false,
    },
    {
      id: 4,
      imgSrc: "https://i.ibb.co/6JmmC6c/hostel-Mate-Inventory.png",
      title: "Inventory Pro",
      desc: `Accounting Pro and Roomate Pro web app modules helps to plan inventory smartly. 
      The web app Inventory Pro module generates various reports to forcast spendings.`,
      isActive: false,
    },
  ]);

  return (
    <>
      <section className="overflow-hidden bg-white grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl lg:text-center text-left">
            <div className="flex flex-col lg:flex-row">
              <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                WebInt Solutions
              </h3>
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl p-2 banner-title-md">
                <span className="bg-accent text-white">HostelMate Pro</span>
              </h2>
            </div>
            <div className="flex justify-center lg:justify-end text-lg mr-6 pr-2 text-center font-dancingScript">
              <h4>Web App, Free for commercial use as well..!!</h4>
            </div>
            <p className="text-gray-500 md:mt-4 md:block">
              The india first trusted hostel management web app. HostelMate Pro
              will give you more control over your small accommodation business.
            </p>
            <SlideCardComponent 
              slideOptions={features} 
              setSlideOptions={setFeatures}
              options={{btnColorClass: "btn-accent"}}
            />
            <div className="mt-4 md:mt-8 flex justify-center">
              <button className="btn btn-accent text-white">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            alt="Student"
            src="https://i.ibb.co/zFy8JBQ/tayler-Hostel.png"
            className="object-cover w-fit h-fit lg:w-[512px] lg:h-[512px]"
          />
        </div>
      </section>
    </>
  );
};

export default HostelMateBanner;
