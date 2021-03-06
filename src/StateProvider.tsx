import React, { createContext, useContext, useReducer } from "react";
import { IStateValue } from "./types";

export const StateContext = createContext({});

export const StateProvider = ({ initialState, reducer, children }: any) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () =>
  useContext(StateContext) as [IStateValue, any];
