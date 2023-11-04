import { useEffect } from "react";
import Main from "./components/Main";
import { Pocketprovider, usePocketContext } from "./context/pocketContext";

function App() {
  const { selected, setSelected } = usePocketContext();
  useEffect(() => {
    setSelected(localStorage.getItem("selected") || "");
  }, [selected]);
  return (
    <Pocketprovider>
      <Main />
    </Pocketprovider>
  );
}

export default App;
