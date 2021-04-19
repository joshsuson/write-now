import React from "react";
import StoryCard from "./StoryCard";
import { useStoryContext } from "../../context/StoryContext";

export default function StoriesList() {
  const { stories, noStories } = useStoryContext();
  return (
    <div className="mt-24">
      {!!noStories && (
        <div>
          <h2 className="text-3xl text-center">
            Looks like you haven't created any stories yet.
          </h2>
        </div>
      )}
      {!noStories && (
        <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stories.map((story) => (
            <StoryCard
              key={story.title}
              title={story.title}
              href={story.href}
              type={story.structure}
              initials={story.initials}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
