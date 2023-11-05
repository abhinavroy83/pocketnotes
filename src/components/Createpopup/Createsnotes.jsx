import { useState } from "react";
import "./Createnotes.css";

function Createsnotes({ groupNamesParent, setGroupNamesParent, onClose }) {
  const [groupName, setGroupName] = useState("");
  const [bgColor, setBgColor] = useState("");

  const handleGroupName = (e) => {
    setGroupName(e.target.value);
  };

  const handleColor = (e) => {
    const div = e.target;
    setBgColor(getComputedStyle(div).backgroundColor);
  };

  const saveName = () => {
    const newGroup = { name: groupName, color: bgColor };
    setGroupNamesParent([...groupNamesParent, newGroup]);
    localStorage.setItem(
      "groupNames",
      JSON.stringify([...groupNamesParent, newGroup])
    );
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup__title">
        <p>Create New Notes Group</p>
      </div>
      <div className="popup__input">
        <p>Group Name</p>

        <input
          value={groupName}
          onChange={handleGroupName}
          type="text"
          placeholder="Enter Group Name..."
        />
      </div>
      <div className="color_input">
        <p>Group Color</p>

        <div className="color">
          <div
            className={`color__1 ${
              bgColor === "rgb(179, 139, 250)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`color_2 ${
              bgColor === "rgb(255, 121, 242)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`color__3 ${
              bgColor === "rgb(67, 230, 252)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`color__4 ${
              bgColor === "rgb(241, 149, 118)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`color__5 ${
              bgColor === "rgb(0, 71, 255)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`color__6 ${
              bgColor === "rgb(102, 145, 255)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
        </div>
      </div>
      <div className="popup__close">
        <button onClick={saveName} disabled={groupName.length === 0}>
          Create
        </button>
      </div>
    </div>
  );
}

export default Createsnotes;
