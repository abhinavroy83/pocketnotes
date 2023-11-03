import { createContext, useContext } from "react";

const PocketContext = createContext({
  notes: [],
  addnotes: () => {},
  selected: "",
  setSelected: () => {},
});

export const usePocketContext = () => {
  return useContext(PocketContext);
};

export const pocketprovider = PocketContext.Provider;
