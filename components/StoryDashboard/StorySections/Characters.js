import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Sidebar from "./Sidebar";
import { CreateCharacter } from "../Character";
import { useStoryContext, ACTIONS } from "../../../context/StoryContext";

const NoCharacters = () => {
  return (
    <>
      <h2>There's no character selected. Select a character or create one.</h2>
      <button>Create Character</button>
    </>
  );
};

const SelectedCharacter = () => {
  return (
    <>
      <h2>This is a selected character</h2>
    </>
  );
};

export const Characters = () => {
  const { characterNav, characterDispatch, characters } = useStoryContext();

  function returnSelectedCharacter() {
    switch (characterNav.selected) {
      case "new-character":
        return <CreateCharacter cancel={handleCancelCharacter} />;
      case "selected":
        return <SelectedCharacter />;
      default:
        return <NoCharacters />;
    }
  }

  const handleAddCharacter = () => {
    characterDispatch({
      type: ACTIONS.ADD_CHARACTER,
      payload: { name: "new-character" },
    });
    console.log("working");
  };

  const handleCancelCharacter = () => {
    characterDispatch({
      type: ACTIONS.ADD_CHARACTER,
      payload: { name: "" },
    });
  };

  const selectCharacter = (id, name) => {
    characterDispatch({
      type: ACTIONS.SELECT_CHARACTER,
      payload: {
        id: id,
        name: name,
      },
    });
  };

  return (
    <>
      <Sidebar
        items={characters}
        add={handleAddCharacter}
        select={selectCharacter}
      />
      <div className="col-span-8">{returnSelectedCharacter()}</div>
    </>
  );
};
