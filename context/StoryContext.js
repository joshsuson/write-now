import React, { useState, useContext, createContext, useReducer } from "react";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

const StoryContext = createContext();

export function useStoryContext() {
  return useContext(StoryContext);
}

export const ACTIONS = {
  SELECT_SECTION: "select-section",
};

export default function StoryContextProvider({ children }) {
  const router = useRouter();
  //   Create Story Data
  const [title, setTitle] = useState("");
  const [initials, setInitials] = useState("");
  const [character, setCharacter] = useState("");
  const [desire, setDesire] = useState("");
  const [obstacle, setObstacle] = useState("");
  const [storyStatment, setStoryStatement] = useState("");
  const [structure, setStructure] = useState("Hero's Journey");
  const [storyId, setStoryId] = useState();
  const [stories, setStories] = useState([]);
  const [noStories, setNoStories] = useState(true);

  const [storyNavSection, dispatch] = useReducer(reducer, {
    selected: "overview",
  });

  function reducer(storyNavSection, action) {
    switch (action.type) {
      case ACTIONS.SELECT_SECTION:
        return { ...storyNavSection, selected: action.payload.name };
      default:
        return storyNavSection;
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
      storyStatment,
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
    storyStatment,
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
  };

  return (
    <StoryContext.Provider value={storyData}>
      <div>{children}</div>
    </StoryContext.Provider>
  );
}
