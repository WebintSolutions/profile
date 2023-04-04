import React, { useEffect, useState } from "react";
import { supabase } from "./../../supabaseClient";

const ContactUsBanner = () => {
  const [state, setState] = useState({});
  const [error, setError] = useState();
  const [disableSubmit, setDisableSubmit] = useState(true);
  useEffect(() => {
    if (state) {
      const requireFields = {};
      if (state.name && state.name.length === 0) {
        requireFields.name = "Required";
      } else if (state.name && state.name.length < 3) {
        requireFields.name = "Name should be atleast three characters";
      }

      const emailReg =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (state.email && state.email.length === 0) {
        requireFields.email = "Required";
      } else if (state.email && !state.email.match(emailReg)) {
        requireFields.email = "please enter valid email";
      }

      if (!state.name || !state.email || Object.keys(requireFields).length > 0) {
        setDisableSubmit(true);
      } else {
        setDisableSubmit(false);
      }

      console.log("--== requireFields ", requireFields);
      setError(requireFields);
    }
  }, [state.name, state.email]);
  const handleContactUs = async (params) => {
    console.log("--== 1handleContactUs ", params);
    const entity = await supabase.from("contactUs").insert([params]);
    console.log("--== 2handleContactUs ", entity);
  };
  return (
    <>
      <section className="bg-[#e5e5e5] clip-sm-contact-us">
        <div className="flex flex-col justify-center items-center lg:flex-row">
          <h2 className="text-2xl font-bold md:text-3xl p-2 banner-title-md">
            <span className="bg-secondary text-white">Contact Us</span>
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center w-full p-4">
          <div className="form-control w-full max-w-4xl m-1">
            <label className="label">
              <span className="label-text">Name</span>
              <span className="label-text-alt">*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
              onChange={(e) => setState({ ...state, name: e.target.value })}
            />
            <label className="label">
              <span className="label-text-alt text-red-500">
                {error && error.name}
              </span>
            </label>
          </div>
          <div className="form-control w-full max-w-4xl m-1">
            <label className="label">
              <span className="label-text">Email</span>
              <span className="label-text-alt">*</span>
            </label>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full"
              onChange={(e) => setState({ ...state, email: e.target.value })}
            />
            <label className="label">
              <span className="label-text-alt text-red-500">
                {error && error.email}
              </span>
            </label>
          </div>
          <div className="form-control w-full max-w-4xl m-1">
            <label className="label">
              <span className="label-text">Mobile Number</span>
            </label>
            <input
              type="text"
              placeholder="Mobile Number"
              className="input input-bordered w-full"
              onChange={(e) =>
                setState({ ...state, mobileNumber: e.target.value })
              }
            />
          </div>
          <div className="form-control w-full max-w-4xl m-1">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24  w-full"
              placeholder="Details"
              onChange={(e) => setState({ ...state, notes: e.target.value })}
            ></textarea>
          </div>
          <div className="flex justify-center w-full max-w-4xl mt-4 p-4">
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => handleContactUs(state)}
              disabled={disableSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsBanner;
