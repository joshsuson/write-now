import React from "react";
import { PencilAltIcon, InformationCircleIcon } from "@heroicons/react/outline";

export const Overview = () => {
  return (
    <div className="col-span-10 p-2">
      <div className="flex justify-end">
        <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400">
          <InformationCircleIcon className="h-6 w-6" />
        </button>
        <button className="bg-white ml-1 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400">
          <PencilAltIcon className="h-6 w-6" />
        </button>
      </div>
      <h1>This is the overview section</h1>
    </div>
  );
};
