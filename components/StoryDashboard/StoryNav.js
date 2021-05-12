import React from "react";
import { useStoryContext, ACTIONS } from "../../context/StoryContext";

const navItems = [
  { title: "Overview", name: "overview" },
  { title: "Story", name: "story" },
  { title: "Characters", name: "characters" },
  { title: "Locations", name: "locations" },
  { title: "Encyclopedia", name: "encyclopedia" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function StoryNav({ initials }) {
  const { storyNavSection, dispatch, ACTIONS } = useStoryContext();
  return (
    <div className="bg-blueGray-800 col-span-2 rounded-l-lg">
      <div className="text-coolGray-100 rounded-tl-lg bg-red-400 py-4 mb-4 font-semibold text-2xl flex justify-center items-center tracking-wider">
        {initials}
      </div>
      {navItems.map((item, i) => {
        return (
          <div
            key={`${item.name}-${i}`}
            onClick={() =>
              dispatch({
                type: ACTIONS.SELECT_SECTION,
                payload: { name: item.name },
              })
            }
            className={classNames(
              storyNavSection.selected === item.name
                ? "uppercase p-2 m-2 rounded-lg bg-blueGray-600 text-coolGray-100"
                : "text-coolGray-100 hover:text-coolGray-50 hover:bg-blueGray-700 uppercase p-2 m-2 rounded-lg cursor-pointer"
            )}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
}
