import { useState } from "react";
import "./App.css";
import { pocketprovider } from "./context";

function App() {
  const [selected, setSelected] = useState("");
  const [notes, setNotes] = useState([]);

  return <pocketprovider value={{ selected, notes }}></pocketprovider>;
}

export default App;
