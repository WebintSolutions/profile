import React from "react";
import { ArrowRightIcon, CheckIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const SubscribeBanner = () => {
  return (
    <>
      <div className="flex items-center justify-center text-gray-900 w-full mr-2 ml-2">
        <input
          type="text"
          placeholder="Email or Mobile, for invitation"
          className="input input-sm rounded-none rounded-l input-bordered w-full"
        />
        <button className="btn btn-primary btn-sm rounded-none">
            <CheckIcon className="h-4 w-4" />
        </button>
      </div>
    </>
  );
};

export default SubscribeBanner;
