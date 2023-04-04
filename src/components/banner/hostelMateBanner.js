import React, { useState } from "react";
import SlideCardComponent from "../slide-card/_slideCard";

const RoomerWalletBanner = () => {
  const [features, setFeatures] = useState([
    {
      id: 1,
      imgSrc: "https://i.ibb.co/HXZ8NmJ/hostel-Mate-Accts.png",
      title: "Accounts",
      desc: `RoomerWallet makes sharing expenses simple for room activities and daily life.
      Nothing is hidden. All logged expenses are visible to the group, and everyone can add their own.
      The app does math for your room and manages a Telegram group for your room to notify expenses.`,
      isActive: true,
    },
    {
      id: 2,
      imgSrc: "https://i.ibb.co/SnqjmWH/hostel-Mate-HKeep.png",
      title: "Tasks",
      desc: `Create your room daily tasks and assign to roommates rendomly by weekly at once, The RoomerWallet 
      helps to notify and track the task for your room.`,
      isActive: false,
    },
    {
      id: 3,
      imgSrc: "https://i.ibb.co/6JmmC6c/hostel-Mate-Inventory.png",
      title: "Party Wallet",
      desc: `RoomerWallet helps to plan an event and draft the expenses to share with roommates for voating.
      The party wallet helps to plan and collect budget amount by planner and makes the party awesome on kickoff.`,
      isActive: false,
    },
    {
      id: 4,
      imgSrc: "https://i.ibb.co/6JmmC6c/hostel-Mate-Inventory.png",
      title: "Vacancies",
      desc: `RoomerWallet find vacancies by room capacity and publishes the availability for quick finding of best roommate.`,
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
                <span className="bg-accent text-white">RoomerWallet</span>
              </h2>
            </div>
            <p className="text-gray-500 md:mt-4 md:block">
              Tracking shared expenses and balances with roommates is not enough for a 
              joyful room expirence. RoomerWallet plugs tasks, party wallet and publish vacancies quickly
              to flip another word for <span className="font-bold">roommates expirence</span>.
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
            src="/wallet.png"
            className="object-cover w-fit h-fit lg:w-[512px] lg:h-[512px]"
          />
        </div>
      </section>
    </>
  );
};

export default RoomerWalletBanner;
