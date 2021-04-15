import React from "react";
import StoryCard from "./StoryCard";
const startingStories = [
  {
    title: "A Waking World",
    initials: "WW",
    href: "#",
    type: "Heroes Journey",
  },
  {
    title: "In The Dead of Night",
    initials: "DN",
    href: "#",
    type: "Heroes Journey",
  },
  {
    title: "Analog Chronicles",
    initials: "AC",
    href: "#",
    type: "3 Act Structure",
  },
  {
    title: "Recreated",
    initials: "R",
    href: "#",
    type: "Heroes Journey",
  },
];

export default function StoriesList({ stories }) {
  return (
    <div className="mt-24">
      <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stories.map((story) => (
          <StoryCard
            key={story.title}
            title={story.title}
            href={story.href}
            type={story.type}
            initials={story.initials}
          />
        ))}
      </ul>
    </div>
  );
}
