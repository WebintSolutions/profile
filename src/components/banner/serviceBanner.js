import React from "react";

const ServiceBanner = () => {
  return (
    <>
      <section className="bg-[#dbce23] block-header-sm-image lg:block-header-lg-image">
        <div className="flex lg:flex-row justify-between flex-col-reverse">
          <img
            src="https://i.ibb.co/S76DJvp/mikec5000.png"
            className="lg:h-[512px] lg:w-[512px] h-full w-full"
          />
          <div className="flex flex-col aline-items-center mt-4 w-full">
            <div className="mt-4 flex flex-col aline-items-center justify-center text-white">
              <h1 className="banner-title-md text-right">
                <span>Web</span>
              </h1>
              <h1 className="banner-title-md">
                <span>
                  <span>Int</span>
                  <span className="bg-[#fff] text-[#cbccb8]">elligent</span>
                </span>
              </h1>
              <h1 className="banner-title-md">
                <span>Solutions</span>
              </h1>
            </div>
            <div className="text-white lg:text-3xl text-xl md:text-2xl font-medium text-center mt-4">
              WE ARE EXPERIENCED WEB APPLICATION DEVELOPERS,
            </div>
            <div className="flex flex-wrap aline-items-center justify-center">
              <div className="badge text-white m-2">FRONT-END DEVELOPERS</div>
              <div className="badge text-white m-2">BACK-END DEVELOPERS</div>
              <div className="badge text-white m-2">
                HYBRID APPLICATION DEVELOPERS
              </div>
            </div>
            <div className="text-white lg:text-2xl text-lg md:text-xl font-medium text-center">
              WE HELP YOUR PROFESSIONAL, BUSINESS SUCCESS.
            </div>
            <div className="mt-4 mb-4 lg:mb-0 flex flex-wrap aline-items-center justify-center">
              <button className="btn btn-accent text-white m-2">
                Web Application Development
              </button>
              <button className="btn btn-primary text-white m-2">
                Web Development Training
              </button>
              <button className="btn btn-secondary text-white m-2">
                Job Support Program
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceBanner;
