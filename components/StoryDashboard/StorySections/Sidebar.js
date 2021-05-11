import React from "react";
import { DocumentAddIcon } from "@heroicons/react/outline";

export default function Sidebar({ items, storySection }) {
  return (
    <div className="col-span-2 p-2 bg-blueGray-700 text-coolGray-100">
      {!storySection && (
        <div className="flex justify-end">
          <button className="bg-red-500 p-1 rounded-full text-blueGray-700 hover:bg-red-600 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-red-500">
            <DocumentAddIcon className="h-6 w-6" />
          </button>
        </div>
      )}
      <nav>
        {items.map((item) => (
          <div
            key={item.name}
            className="text-coolGray-100 hover:text-coolGray-50 hover:bg-blueGray-600 uppercase p-2 m-2 rounded-lg cursor-pointer"
          >
            {item.title}
          </div>
        ))}
      </nav>
    </div>
  );
}
