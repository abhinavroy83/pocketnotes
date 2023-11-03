import { useState } from "react";
import "./App.css";
import { pocketprovider } from "./context/pocketContext";
import NotesList from "./components/NotesList";
import NotesHome from "./components/NotesHome";

function App() {
  const [selected, setSelected] = useState("");
  const [notes, setNotes] = useState([]);

  return (
    <pocketprovider value={{ selected, notes }}>
      <div>
        <NotesList />
        <NotesHome />
      </div>
    </pocketprovider>
  );
}

export default App;
