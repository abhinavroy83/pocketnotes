import { useEffect, useState } from "react";
import "./NoteList.css";
import Createsnotes from "../Createpopup/Createsnotes";
import Notestitle from "../NotesTitle/Notestitle";

function NotesList() {
  const [titles, setTitles] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [groupNamesParent, setGroupNamesParent] = useState(
    localStorage.getItem("groupNames") || []
  );

  useEffect(() => {
    const data = localStorage.getItem("groupNames");
    if (data) {
      setGroupNamesParent(JSON.parse(data));
    } else {
      setGroupNamesParent([]);
    }
  }, []);

  useEffect(() => {
    if (groupNamesParent.length > 0) {
      const obj = JSON.parse(localStorage.getItem("groupNames"));
      const result = Object.keys(obj).map((key) => [obj[key]]);
      setTitles(result);
    }
  }, [groupNamesParent]);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="sidebar">
      <div className="sidebar_title">Pocket Notes</div>
      <div className="notes_btn">
        <button onClick={handleClick}>
          <span id="add">+</span>
          <span>Create Notes Group</span>
        </button>
      </div>
      <div className="noteTitle">
        {titles.length > 0 ? (
          titles.map((title, index) => <Notestitle key={index} title={title} />)
        ) : (
          <div className="">
            <p>No Notes Group Created</p>
          </div>
        )}
      </div>
      {showPopup && (
        <div className="popup_overlap">
          <Createsnotes
            groupNamesParent={groupNamesParent}
            setGroupNamesParent={setGroupNamesParent}
            onClose={handleClose}
          />
        </div>
      )}
    </div>
  );
}

export default NotesList;
