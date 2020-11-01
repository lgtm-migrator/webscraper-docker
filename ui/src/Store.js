import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  api: null,
  urls: [
    {
      id: 0,
      name: "thehackernews.com",
      check: 0,
      url: "https://thehackernews.com/",
    },
    { id: 1, name: "test2", check: 0, url: "" },
    { id: 2, name: "test3", check: 0, url: "" },
    { id: 3, name: "test4", check: 0, url: "" },
  ],
  // buttons
  showBtnActions: true,
  dlBtnDsbld: false,
  // utils
  loading: false,
  errMsg: false,
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
