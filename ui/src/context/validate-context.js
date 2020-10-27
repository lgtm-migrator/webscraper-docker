import React, { useState, createContext } from "react";

// Create Context Object
export const ValidateContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const ValidateContextProvider = (props) => {
    const [count, setCount] = useState(0);
  return (
    <ValidateContext.Provider value={[count, setCount]}>
      {props.children}
    </ValidateContext.Provider>
  );
};
