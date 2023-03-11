import React from "react";
import WebIntIconLogo from "../logo/_icon_logo";

const ContactUsBanner = () => {
  return (
    <>
      <section className="w-full bg-[#e5e5e5] text-gray-900 p-4 flex justify-center items-center">
          <div class="card lg:card-side bg-[#e5e5e5]">
            <figure>
              <img
                src="/contactUs.png"
                className="lg:w-[256px] lg:h-[256px]"
                alt="Movie"
              />
            </figure>
            <div class="card-body">
              <div className="flex flex-col justify-center items-center lg:flex-row">
                <h3 className="text-2xl font-bold md:text-3xl">
                  WebInt Solutions
                </h3>
                <h2 className="text-2xl font-bold md:text-3xl p-2 banner-title-md">
                  <span className="bg-info text-white">Who we are?</span>
                </h2>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsBanner;
