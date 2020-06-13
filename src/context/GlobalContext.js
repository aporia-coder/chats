import React, { createContext, useReducer } from "react";
import { GlobalReducer } from "./GlobalReducer";

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);
  return (
    <GlobalContext.Provider value={{ topics, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
