import React, { useState, useEffect } from "react";
import { useStoryContext } from "../../context/StoryContext";
import StoryNav from "./StoryNav";
import {
  Characters,
  Encyclopedia,
  Locations,
  Overview,
  Story,
} from "./StorySections";

export default function StoryDashboard() {
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const { stories, storyId, storyNavSection } = useStoryContext();

  useEffect(() => {
    const currentStory = stories.find((story) => story.storyId === storyId);
    setStory(currentStory);
    setLoading(false);
  }, []);

  function returnSelectedSection() {
    switch (storyNavSection.selected) {
      case "overview":
        return <Overview story={story} />;
      case "story":
        return <Story />;
      case "characters":
        return <Characters />;
      case "locations":
        return <Locations />;
      case "encyclopedia":
        return <Encyclopedia />;
      default:
        return <h1>Nothing has been selected.</h1>;
    }
  }
  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      {!!loading && !story && <h1>Loading...</h1>}
      {!!story && !loading && (
        <>
          <h1 className="text-center text-5xl mb-8">{story.title}</h1>
          <div className="grid grid-cols-12 rounded-lg shadow-lg">
            <StoryNav initials={story.initials} />
            <>{returnSelectedSection()}</>
          </div>
        </>
      )}
    </div>
  );
}
