import React from "react";
import CreateStoryForm from "./CreateStoryForm";
import { RefreshIcon, XIcon, ChevronRightIcon } from "@heroicons/react/outline";

export default function CreateStory() {
  return (
    <div className="mx-auto mt-20 max-w-7xl mb-20">
      <div className="mb-12">
        <h1 className="text-center text-5xl">Your Next Great Story</h1>
        <h2 className="text-center mt-8 text-gray-500 text-sm tracking-wide">
          Need inspiration? Click the
          <RefreshIcon className="h-6 w-6 inline mx-1" />
          button to get random results.
        </h2>
      </div>
      <div className="bg-white shadow-lg rounded-lg ">
        <div className="px-4 py-5 sm:p-6">
          <CreateStoryForm />
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <XIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
          Cancel
        </button>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-500 hover:bg-customRed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Start Story
          <ChevronRightIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
