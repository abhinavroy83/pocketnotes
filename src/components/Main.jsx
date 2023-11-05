import React, { useEffect, useState } from "react";
import NotesList from "./NotesList/NotesList";
import NotesHome from "./NotePages/NotesHome";
import HomeNotesDefault from "./Notedefaulthome/HomeNotesDefault";
import "./Main.css";
import { usePocketContext } from "../context/pocketContext";

function Main() {
  const { selected } = usePocketContext();
  return (
    <div className="maindis">
      <NotesList />
      <div className="notes-content-container">
        {selected.length > 0 ? <NotesHome /> : <HomeNotesDefault />}
      </div>
    </div>
  );
}

export default Main;
