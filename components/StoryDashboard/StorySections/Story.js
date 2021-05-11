import React from "react";
import Sidebar from "./Sidebar";

const threeActListItems = [
  { title: "Act 1", name: "act-1" },
  { title: "Act 2", name: "act-2" },
  { title: "Act 3", name: "act-3" },
];

export const Story = () => {
  return (
    <>
      <Sidebar items={threeActListItems} storySection />
      <div className="col-span-8">
        <h1>This is the story section</h1>
      </div>
    </>
  );
};
