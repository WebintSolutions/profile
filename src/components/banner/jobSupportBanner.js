import { ArrowDownIcon, PhoneIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import SlideCardComponent from "../slide-card/_slideCard";

const JobSupportBanner = () => {
  const [features, setFeatures] = useState(jobSupportDetails["FE"]);
  const [activeTab, setActiveTab] = useState("FE");
  const onTabSelect = (id) => {
    setActiveTab(id);
    setFeatures(jobSupportDetails[id]);
  };
  return (
    <>
      <section className="w-full bg-[#e5e5e5] text-gray-900 p-4">
        <div className="flex flex-col justify-center items-center lg:flex-row">
          <h3 className="text-2xl font-bold md:text-3xl">WebInt Solutions</h3>
          <h2 className="text-2xl font-bold md:text-3xl p-2 banner-title-md">
            <span className="bg-secondary text-white">JOB Support Program</span>
          </h2>
        </div>
        <div className="flex justify-center w-full">
          <div className="flex flex-col justify-center items-center lg:w-3/4 w-full mb-4">
            <h4 className="text-lg font-titillium">
              Career shifts in the IT space are a great option for all. To make
              a transition to a new tech specialty, you need a record of
              projects, training, and skills. Making self-driving with
              technology need to be refined with guidence to reach end goal.
              WEBINT Solutions, offer "JOB SUPPORT PROGRAM" to guide your
              journey of reshifting your career. Our JOB Support Program team helps to
              understand your sprint task and be with you till code merge.
            </h4>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center lg:w-3/4">
            <div className="tabs">
              <button
                onClick={() => onTabSelect("FE")}
                className={`tab tab-bordered ${
                  activeTab === "FE" ? "tab-active" : ""
                }`}
              >
                Front-End Developer
              </button>
              <button
                onClick={() => onTabSelect("BE")}
                className={`tab tab-bordered ${
                  activeTab === "BE" ? "tab-active" : ""
                }`}
              >
                Back-End Developer
              </button>
            </div>
            <SlideCardComponent
              slideOptions={features}
              setSlideOptions={setFeatures}
              options={{ btnColorClass: "btn-secondary" }}
            />
          </div>
        </div>
        <div className="flex justify-center w-full mt-4">
          {activeTab === "FE" && (
            <>
              <div className="flex flex-col justify-center items-center lg:w-3/4 w-full mb-4">
                <h4 className="text-lg font-titillium text-center">
                  Promises, React.JS library related Front-End Development -- JOB Support.
                </h4>
                <div className="flex flex-wrap justify-center items-center">
                  {[
                    "HTML5",
                    "CSS3",
                    "SASS",
                    "BOOTSTRAP v4,5",
                    "Materialize CSS",
                    "TailwindCSS",
                  ].map((entity) => (
                    <div className="badge badge-info font-medium m-1">
                      {entity}
                    </div>
                  ))}
                  {[
                    "Javascript",
                    "React.js",
                    "React Context",
                    "Redux",
                    "Redux-Saga",
                    "Redux-Thunk",
                    "MOBX",
                    "Apollo Client GraphQL",
                  ].map((entity) => (
                    <div className="badge badge-warning font-medium m-1">
                      {entity}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          {activeTab === "BE" && (
            <>
              <div className="flex flex-col justify-center items-center lg:w-3/4 w-full mb-4">
                <h4 className="text-lg font-titillium text-center">
                  Promises, Javascript based Node.JS related Back-End Development -- JOB Support.
                </h4>
                <div className="flex flex-wrap justify-center items-center">
                  {[
                    "Node.JS",
                    "JWT",
                    "HTTPS",
                    "Express.JS",
                    "Next.JS",
                    "Yoga-GraphQL"
                  ].map((entity) => (
                    <div className="badge badge-info font-medium m-1">
                      {entity}
                    </div>
                  ))}
                  {[
                    "ORM: prisma",
                    "ORM: sequelize",
                    "SQL/PL-SQL",
                    "MySQL",
                    "PostgreSQL",
                  ].map((entity) => (
                    <div className="badge badge-warning font-medium m-1">
                      {entity}
                    </div>
                  ))}
                  {[
                    "Cloud: Vercel",
                    "Cloud: Render",
                    "Jamstack",
                    "Serverless",
                  ].map((entity) => (
                    <div className="badge badge-goast font-medium m-1">
                      {entity}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        <div className="flex justify-center m-4 p-4">
          <a
            href="https://wa.me/+918105555322"
            target="_blank"
            className="btn btn-secondary"
          >
            <PhoneIcon className="w-4 h-4 m-1" />
            Reach @ +91 810 555 5322
          </a>
        </div>
        {/* <div className="divider  mb-0"></div> */}
      </section>
    </>
  );
};

const jobSupportDetails = {
  FE: [
    {
      id: 1,
      imgSrc: "https://i.ibb.co/xjRD0BL/job-Sup-Java-Script.png",
      title: "Javascript",
      desc: `Accounting Pro and Roomate Pro web app modules helps to plan inventory smartly. 
        The web app Inventory Pro module generates various reports to forcast spendings.`,
      isActive: false,
      status: "13 Years of Exp.",
    },
    {
      id: 2,
      imgSrc: "https://i.ibb.co/K7ny1RW/job-Sup-React-JS.png",
      title: "React.JS",
      desc: `HostelMate Pro Daily Finance Report allows a night auditor to verify all purchases, 
        deposits and payments from one report. Accounting pro helps to manage daily spendings smartly 
        and helps to make right estimates for every time food making.`,
      isActive: true,
      status: "8 Years of Exp.",
    },
    {
      id: 3,
      imgSrc: "https://i.ibb.co/p3wSYhj/job-Sup-Redux.png",
      title: "Redux (State-Management Library)",
      desc: `Manage your housekeeping team and back-of-house operations more effectively. 
              Organize and assign tasks, track room statuses on a real-time feed, and streamline 
              communication with the HostelMate Pro’s Web App.`,
      isActive: false,
      status: "8 Years of Exp.",
    },
    {
      id: 4,
      imgSrc: "https://i.ibb.co/WGQxQmC/job-Sup-Css3.png",
      title: "CSS3",
      desc: `Roomate Pro web app provides smart-link for every customer of Hostel, which helps to update their feedback attendence
         and joining community chat room individually.`,
      isActive: false,
      status: "13 Years of Exp.",
    },
    {
      id: 5,
      imgSrc: "https://i.ibb.co/DVL9Df5/job-Sup-Html5.png",
      title: "CSS3",
      desc: `Roomate Pro web app provides smart-link for every customer of Hostel, which helps to update their feedback attendence
         and joining community chat room individually.`,
      isActive: false,
      status: "13 Years of Exp.",
    },
  ],
  BE: [
    {
      id: 1,
      imgSrc: "https://i.ibb.co/xjRD0BL/job-Sup-Java-Script.png",
      title: "Javascript",
      desc: `Accounting Pro and Roomate Pro web app modules helps to plan inventory smartly. 
        The web app Inventory Pro module generates various reports to forcast spendings.`,
      isActive: false,
      status: "13 Years of Exp.",
    },
    {
      id: 2,
      imgSrc: "https://i.ibb.co/K7ny1RW/job-Sup-React-JS.png",
      title: "React.JS",
      desc: `HostelMate Pro Daily Finance Report allows a night auditor to verify all purchases, 
        deposits and payments from one report. Accounting pro helps to manage daily spendings smartly 
        and helps to make right estimates for every time food making.`,
      isActive: true,
      status: "8 Years of Exp.",
    },
    {
      id: 3,
      imgSrc: "https://i.ibb.co/p3wSYhj/job-Sup-Redux.png",
      title: "Redux (State-Management Library)",
      desc: `Manage your housekeeping team and back-of-house operations more effectively. 
              Organize and assign tasks, track room statuses on a real-time feed, and streamline 
              communication with the HostelMate Pro’s Web App.`,
      isActive: false,
      status: "8 Years of Exp.",
    },
    {
      id: 4,
      imgSrc: "https://i.ibb.co/WGQxQmC/job-Sup-Css3.png",
      title: "CSS3",
      desc: `Roomate Pro web app provides smart-link for every customer of Hostel, which helps to update their feedback attendence
         and joining community chat room individually.`,
      isActive: false,
      status: "13 Years of Exp.",
    },
    {
      id: 5,
      imgSrc: "https://i.ibb.co/DVL9Df5/job-Sup-Html5.png",
      title: "CSS3",
      desc: `Roomate Pro web app provides smart-link for every customer of Hostel, which helps to update their feedback attendence
         and joining community chat room individually.`,
      isActive: false,
      status: "13 Years of Exp.",
    },
  ],
};

export default JobSupportBanner;
