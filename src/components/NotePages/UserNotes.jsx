import React from "react";
import "./UserNotes.css";

function UserNotes({ note }) {
  return (
    <div className="contentNote">
      <div className="notesDetails">
        <div className="contentDate">{note.date}</div>
        <div className="notesContentTime">{note.time}</div>
      </div>
      <div className="contentDetails">
        <p>{note.content}</p>
      </div>
    </div>
  );
}

export default UserNotes;
