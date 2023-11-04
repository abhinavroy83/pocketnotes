import { createContext, useContext, useState } from "react";

const PocketContext = createContext({
  notes: [],
  setNotes: () => {},
  selected: "",
  setSelected: () => {},
});

export const usePocketContext = () => {
  return useContext(PocketContext);
};

export const Pocketprovider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [selected, setSelected] = useState("");

  return (
    <PocketContext.Provider value={{ notes, selected, setSelected, setNotes }}>
      {children}
    </PocketContext.Provider>
  );
};
