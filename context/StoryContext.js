import React, { useState, useContext, createContext } from "react";
import { useRouter } from "next/router";

const StoryContext = createContext();

export function useStoryContext() {
  return useContext(StoryContext);
}

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
  const [stories, setStories] = useState([]);
  const [noStories, setNoStories] = useState(true);

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
    router.push("/");
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
    handleCreateStoryInput,
    handleCreateStory,
    handleCancelCreateStory,
  };

  return (
    <StoryContext.Provider value={storyData}>
      <div>{children}</div>
    </StoryContext.Provider>
  );
}
