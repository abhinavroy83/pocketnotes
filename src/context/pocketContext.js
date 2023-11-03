import { createContext, useContext } from "react";

const PocketContext = createContext({
  notes: [],
  addnotes: () => {}
});

export const usePocketContext = () => {
  return useContext(PocketContext);
};

export const pocketprovider = PocketContext.Provider;
