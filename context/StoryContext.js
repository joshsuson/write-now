import React, { useState, useContext, createContext, useReducer } from "react";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

const StoryContext = createContext();

export function useStoryContext() {
  return useContext(StoryContext);
}

export const ACTIONS = {
  SELECT_SECTION: "select-section",
  ADD_CHARACTER: "add-character",
  SELECT_CHARACTER: "select-character",
};

export default function StoryContextProvider({ children }) {
  const router = useRouter();
  //   Create Story Data
  const [title, setTitle] = useState("");
  const [initials, setInitials] = useState("");
  const [character, setCharacter] = useState("");
  const [desire, setDesire] = useState("");
  const [obstacle, setObstacle] = useState("");
  const [storyStatement, setStoryStatement] = useState("");
  const [structure, setStructure] = useState("Hero's Journey");
  const [storyId, setStoryId] = useState();
  const [stories, setStories] = useState([]);
  const [noStories, setNoStories] = useState(true);
  const [characters, setCharacters] = useState([
    { id: uuidv4(), name: "josh", title: "Josh" },
    { id: uuidv4(), name: "devan", title: "Devan" },
    { id: uuidv4(), name: "addison", title: "Addison" },
  ]);

  const [storyNavSection, dispatch] = useReducer(reducer, {
    selected: "overview",
  });

  const [characterNav, characterDispatch] = useReducer(characterReducer, {
    selected: "",
  });

  function reducer(storyNavSection, action) {
    switch (action.type) {
      case ACTIONS.SELECT_SECTION:
        return { ...storyNavSection, selected: action.payload.name };
      default:
        return storyNavSection;
    }
  }

  function characterReducer(characterNav, action) {
    switch (action.type) {
      case ACTIONS.ADD_CHARACTER:
        return { ...characterNav, selected: action.payload.name };
      case ACTIONS.SELECT_CHARACTER:
        console.log(action.payload.id);
        console.log(action.payload.name);
        return { ...characterNav, selected: "selected" };
      default:
        return characterNav;
    }
  }

  const handleStartStory = () => {
    const id = uuidv4();
    setStoryId(id);
    router.push("/create-story");
  };

  const handleCreateStoryInput = (e) => {
    switch (e.target.id) {
      case "title":
        setTitle(e.target.value);
        break;
      case "initials":
        setInitials(e.target.value);
        break;
      case "character":
        setCharacter(e.target.value);
        break;
      case "desire":
        setDesire(e.target.value);
        break;
      case "obstacle":
        setObstacle(e.target.value);
        break;
      case "storyStatement":
        setStoryStatement(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleCreateStory = () => {
    const newStoryObject = {
      title,
      initials,
      character,
      desire,
      obstacle,
      structure,
      storyStatement,
      storyId,
    };

    setStories((prevStories) => [...prevStories, newStoryObject]);
    if (noStories) {
      setNoStories(false);
    }
    setTitle("");
    setInitials("");
    setCharacter("");
    setDesire("");
    setObstacle("");
    setStructure("Hero's Journey");
    setStoryStatement("");
    router.push(`/stories/${storyId}`);
  };

  const handleCancelCreateStory = () => {
    setTitle("");
    setInitials("");
    setCharacter("");
    setDesire("");
    setObstacle("");
    setStructure("Hero's Journey");
    setStoryStatement("");
    router.push("/");
  };

  const storyData = {
    title,
    initials,
    character,
    desire,
    obstacle,
    storyStatement,
    structure,
    stories,
    noStories,
    setStructure,
    setCharacter,
    setDesire,
    setObstacle,
    handleCreateStoryInput,
    handleCreateStory,
    handleCancelCreateStory,
    handleStartStory,
    storyId,
    ACTIONS,
    dispatch,
    storyNavSection,
    characterNav,
    characterDispatch,
    characters,
  };

  return (
    <StoryContext.Provider value={storyData}>
      <div>{children}</div>
    </StoryContext.Provider>
  );
}
