import React from "react";
import { PlusIcon, SwitchVerticalIcon } from "@heroicons/react/solid";

export default function DashboardNav({ handleClick }) {
  return (
    <div className="mt-24 flex items-center">
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-500 hover:bg-customRed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        onClick={handleClick}
      >
        Create Story
        <PlusIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
      </button>
      <div className="flex items-center ml-auto">
        <div className="flex items-center bg-gray-300 py-1 px-2 rounded text-red-400">
          A-Z <SwitchVerticalIcon className="ml-1 -mr-1 h-5 w-5" />
        </div>
        <div className="flex items-center ml-3">
          Most Recent
          <SwitchVerticalIcon className="ml-1 -mr-1 h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
