import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  urls: [
    { id: 0, name: "hackernews.com", class: "newpaper-button" },
    { id: 1, name: "test2", class: "newpaper-button" },
    { id: 2, name: "test3", class: "newpaper-button" },
    { id: 3, name: "test4", class: "newpaper-button" },
  ],
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
