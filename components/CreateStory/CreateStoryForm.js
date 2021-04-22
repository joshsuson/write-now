import React from "react";
import StoryInput from "./StoryInput";
import StructureSelect from "./StructureSelect";
import StoryStatement from "./StoryStatement";
import { useStoryContext } from "../../context/StoryContext";
import { characterInfo, desireInfo, obstacleInfo } from "../../data/storyParts";

export default function CreateStoryForm() {
  const {
    title,
    initials,
    character,
    desire,
    obstacle,
    handleCreateStoryInput,
  } = useStoryContext();
  return (
    <>
      <div className="grid grid-cols-3 gap-8">
        <StoryInput
          name="title"
          label="Title"
          placeholder="Imagine what it will look like on the next big movie poster"
          colSpan="2"
          value={title}
          handleInput={handleCreateStoryInput}
        />
        <StoryInput
          name="initials"
          label="Initials"
          placeholder="What do you want the initials for your title to be?"
          colSpan="1"
          value={initials}
          handleInput={handleCreateStoryInput}
        />
      </div>
      <div className="grid grid-cols-2 gap-8 mt-10">
        <StoryInput
          name="character"
          label="Character"
          placeholder="Think less name and more type EX. A Plumber"
          colSpan="1"
          options
          value={character}
          handleInput={handleCreateStoryInput}
          infoTitle={characterInfo.title}
          infoBody={characterInfo.tip}
        />
        <StoryInput
          name="desire"
          label="Desire"
          placeholder="What does your character want?"
          colSpan="1"
          options
          value={desire}
          handleInput={handleCreateStoryInput}
          infoTitle={desireInfo.title}
          infoBody={desireInfo.tip}
        />
      </div>
      <div className="grid grid-cols-2 gap-8 mt-10">
        <StoryInput
          name="obstacle"
          label="Obstacle"
          placeholder="What's keeping your character from getting what it wants"
          colSpan="1"
          options
          value={obstacle}
          handleInput={handleCreateStoryInput}
          infoTitle={obstacleInfo.title}
          infoBody={obstacleInfo.tip}
        />
        <StructureSelect />
      </div>
      <div className="mt-10">
        <StoryStatement />
      </div>
    </>
  );
}
