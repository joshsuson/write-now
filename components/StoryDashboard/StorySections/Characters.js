import React from "react";
import { v4 as uuidv4 } from "uuid";
import Sidebar from "./Sidebar";

const exampleCharacters = [
  { id: uuidv4(), name: "josh", title: "Josh" },
  { id: uuidv4(), name: "devan", title: "Devan" },
  { id: uuidv4(), name: "addison", title: "Addison" },
];

export const Characters = () => {
  return (
    <>
      <Sidebar items={exampleCharacters} />
      <div className="col-span-8">
        <h1>This is the characters section</h1>
      </div>
    </>
  );
};
