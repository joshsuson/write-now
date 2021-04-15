import React, { useState } from "react";
import DashboardHeading from "./DashboardHeading";
import DashboardNav from "./DashboardNav";
import StoriesList from "./StoriesList";

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

export default function Dashboard() {
  const [stories, setStories] = useState(startingStories);

  const handleClick = () => {
    const newStory = {
      title: "New Story",
      initials: "NS",
      href: "#",
      type: "Heroes Journey",
    };

    setStories((prevStories) => [...prevStories, newStory]);
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      <DashboardHeading />
      <DashboardNav handleClick={handleClick} />
      <StoriesList stories={stories} />
    </div>
  );
}
