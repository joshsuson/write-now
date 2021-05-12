import React from "react";
import { PencilAltIcon, InformationCircleIcon } from "@heroicons/react/outline";
import { DashboardInfo } from "../../General";
DashboardInfo;

export const Overview = ({ story }) => {
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
      <div className="p-4">
        <h2 className="uppercase text-lg">Story Information</h2>
        <div className="flex gap-4 mt-4">
          <DashboardInfo label="Title" info={story.title} />
          <DashboardInfo label="Initials" info={story.initials} />
        </div>
        <h2 className="uppercase text-lg mt-8">Character Information</h2>
        <div className="flex gap-4 mt-4">
          <DashboardInfo label="Character" info={story.character} />
          <DashboardInfo label="Desire" info={story.desire} />
          <DashboardInfo label="Obstacle" info={story.obstacle} />
        </div>
        <div className="mt-8">
          <h2 className="uppercase text-lg mb-4">Structure</h2>
          <h3 className="bg-red-400 text-coolGray-100 uppercase text-xl p-2 max-w-max font-semibold rounded-md">
            {story.structure}
          </h3>
        </div>
        <div className="mt-8">
          <h2 className="uppercase text-coolGray-100 bg-red-400 rounded-t-md p-2 font-semibold text-xl">
            Story Statement
          </h2>
          <h3 className="bg-coolGray-200 text-lg px-2 pt-4 rounded-b-md h-36">
            {story.storyStatement}
          </h3>
        </div>
      </div>
    </div>
  );
};
