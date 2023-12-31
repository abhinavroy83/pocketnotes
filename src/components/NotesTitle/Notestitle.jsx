import { useNavigate } from "react-router-dom";
import { usePocketContext } from "../../context/pocketContext";
import "./Notestitle.css";

function Notestitle({ title }) {
  const navigate = useNavigate();
  const { selected, setSelected } = usePocketContext();
  const nameInitals = title[0].name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();

  const newTitle = title[0].name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const handleTitleClick = () => {
    setSelected(title[0].name);

    if (window.innerWidth <= 768) {
      setSelected(title[0].name);
      navigate("/notes");
    }
    // navigate("/notes");
  };

  return (
    <div
      onClick={handleTitleClick}
      className={`group__title__logo ${
        selected === title[0].name ? "highlighted__title" : null
      }`}
    >
      <div className="title__logo" style={{ backgroundColor: title[0].color }}>
        {nameInitals}
      </div>
      <div className="group__title">{newTitle}</div>
    </div>
  );
}

export default Notestitle;
