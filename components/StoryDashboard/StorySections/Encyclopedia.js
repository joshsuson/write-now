import React from "react";
import Sidebar from "./Sidebar";

const exampleNotes = [
  { name: "first-note", title: "First Note" },
  { name: "second-note", title: "Third Note" },
  { name: "third-note", title: "Third Note" },
];

export const Encyclopedia = () => {
  return (
    <>
      <Sidebar items={exampleNotes} />
      <div className="col-span-8">
        <h1>This is the encyclopedia section</h1>
      </div>
    </>
  );
};
