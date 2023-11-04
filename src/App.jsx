import { useEffect } from "react";
import './App.css'
import Main from "./components/Main";
import { Pocketprovider, usePocketContext } from "./context/pocketContext";

function App() {
  const { selected, setSelected } = usePocketContext();
  useEffect(() => {
    setSelected(localStorage.getItem("selected") || "");
  }, [selected]);
  return (
    <Pocketprovider>
      <div className="App">
        <Main />
      </div>
    </Pocketprovider>
  );
}

export default App;
