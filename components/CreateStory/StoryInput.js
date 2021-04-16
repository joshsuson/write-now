import React from "react";
import { RefreshIcon, InformationCircleIcon } from "@heroicons/react/outline";

export default function StoryInput({
  name,
  options,
  placeholder,
  label,
  colSpan,
}) {
  return (
    <div className={`col-span-${colSpan}`}>
      <div className="flex justify-between">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        {options && (
          <span className="text-sm text-gray-500" id={`${name}-optional`}>
            <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customRed">
              <InformationCircleIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <button className="bg-white ml-1 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customRed">
              <RefreshIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </span>
        )}
      </div>
      <div className="mt-1">
        <input
          type="text"
          name={name}
          id={name}
          className="shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
