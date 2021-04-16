import { InformationCircleIcon } from "@heroicons/react/outline";
import React from "react";
import StoryInput from "./StoryInput";
import StructureSelect from "./StructureSelect";

export default function CreateStoryForm() {
  return (
    <>
      <div className="grid grid-cols-3 gap-8">
        <StoryInput
          name="title"
          label="Title"
          placeholder="Imagine what it will look like on the next big movie poster"
          colSpan="2"
        />
        <StoryInput
          name="initials"
          label="Initials"
          placeholder="What do you want the initials for your title to be?"
          colSpan="1"
        />
      </div>
      <div className="grid grid-cols-2 gap-8 mt-10">
        <StoryInput
          name="character"
          label="Character"
          placeholder="Think less name and more type EX. A Plumber"
          colSpan="1"
          options
        />
        <StoryInput
          name="desire"
          label="Desire"
          placeholder="What does your character want?"
          colSpan="1"
          options
        />
      </div>
      <div className="grid grid-cols-2 gap-8 mt-10">
        <StoryInput
          name="obstacle"
          label="Obstacle"
          placeholder="What's keeping your character from getting what it wants"
          colSpan="1"
          options
        />
        <StructureSelect />
      </div>
      <div className="mt-10">
        <div className="flex justify-between">
          <label
            htmlFor="storyStatement"
            className="block text-sm font-medium text-gray-700"
          >
            Story Statement
          </label>
          <span className="text-sm text-gray-500" id="storyStatement-optional">
            <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customRed">
              <InformationCircleIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </span>
        </div>
        <textarea
          id="storyStatement"
          name="storyStatement"
          rows={3}
          placeholder="a CHARACTER who has a DESIRE and must overcome an OBSTACLE to get it"
          className="shadow-sm block w-full focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </>
  );
}
