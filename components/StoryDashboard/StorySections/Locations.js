import React from "react";
import { v4 as uuidv4 } from "uuid";
import Sidebar from "./Sidebar";

const exampleLocations = [
  { id: uuidv4(), name: "charlotte-nc", title: "Charlotte, NC" },
  { id: uuidv4(), name: "concord-nc", title: "Concord, NC" },
  { id: uuidv4(), name: "fayetteville-ak", title: "Fayetteville, AK" },
];

export const Locations = () => {
  return (
    <>
      <Sidebar items={exampleLocations} />
      <div className="col-span-8">
        <h1>This is the locations section</h1>
      </div>
    </>
  );
};
