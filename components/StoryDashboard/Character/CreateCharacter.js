import React from "react";

export const CreateCharacter = ({ cancel }) => {
  return (
    <div>
      <h1>This is the create character form</h1>
      <button onClick={() => cancel()}>Cancel</button>
    </div>
  );
};
