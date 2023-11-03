import { useState } from "react";
import "./App.css";
import NotesList from "./components/NotesList/NotesList";
import NotesHome from "./components/NotesHome";
import { pocketprovider } from "./context/pocketContext";

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
